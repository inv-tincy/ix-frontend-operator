import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '../page';
import '@testing-library/jest-dom';

// ✅ Mock next/navigation
const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('LoginPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
    localStorage.clear();
  });

  test('renders login form', () => {
    render(<LoginPage />);
    expect(screen.getByText(/Welcome Back/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeDisabled();
  });

  test('enables login button when email is entered', () => {
    render(<LoginPage />);
    const input = screen.getByLabelText(/Email/i);
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(screen.getByRole('button', { name: /Login/i })).toBeEnabled();
  });

  test('successful login redirects to /home', async () => {
    const mockUser = { id: 1, email: 'test@example.com' };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ user: mockUser }),
    });

    render(<LoginPage />);

    const input = screen.getByLabelText(/Email/i);
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    await waitFor(() => {
      expect(localStorage.getItem('loggedUser')).toContain('test@example.com');
      expect(mockPush).toHaveBeenCalledWith('/home');
    });
  });

  test('shows error message when login fails', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    render(<LoginPage />);

    const input = screen.getByLabelText(/Email/i);
    fireEvent.change(input, { target: { value: 'wrong@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    await waitFor(() => {
      expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
      expect(mockPush).not.toHaveBeenCalled();
    });
  });
});
