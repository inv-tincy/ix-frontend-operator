/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from '@/app/home/page';
import { useRouter } from 'next/navigation';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('HomePage Component', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('redirects to /login when no user in localStorage', async () => {
    render(<HomePage />);
    await waitFor(() => expect(mockPush).toHaveBeenCalledWith('/login'));
  });

  it('renders user info from localStorage', async () => {
    const mockUser = {
      name: 'John Doe',
      email: 'john@example.com',
      address: { city: 'Tokyo' },
      phone: '1234567890',
    };
    localStorage.setItem('loggedUser', JSON.stringify(mockUser));

    render(<HomePage />);

    // Check greeting and profile fields
    expect(await screen.findByText(/Hi John Doe/i)).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Tokyo')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();
  });

  it('renders fallback text when user fields missing', async () => {
    const mockUser = { name: '', email: '', address: {}, phone: '' };
    localStorage.setItem('loggedUser', JSON.stringify(mockUser));

    render(<HomePage />);
    expect(await screen.findByText(/Hi User/i)).toBeInTheDocument();
    expect(screen.getAllByText('-')).toHaveLength(3); // email, city, phone
  });

  it('logs out and redirects to login', async () => {
    const mockUser = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      address: { city: 'Osaka' },
      phone: '9876543210',
    };
    localStorage.setItem('loggedUser', JSON.stringify(mockUser));

    render(<HomePage />);
    const logoutButton = await screen.findByText(/Logout/i);
    fireEvent.click(logoutButton);

    await waitFor(() => {
      expect(localStorage.getItem('loggedUser')).toBeNull();
      expect(mockPush).toHaveBeenCalledWith('/login');
    });
  });

  it('renders UI elements correctly', () => {
    localStorage.setItem(
      'loggedUser',
      JSON.stringify({ name: 'Alex', email: 'alex@mail.com' })
    );
    render(<HomePage />);

    expect(screen.getByText(/Interview Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/📧 Email/i)).toBeInTheDocument();
    expect(screen.getByText(/🏙️ City/i)).toBeInTheDocument();
    expect(screen.getByText(/📞 Phone/i)).toBeInTheDocument();
  });
});
