import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: undefined,
};

// --- async thunk for login ---
export const loginUser = createAsyncThunk<User, string>(
  'user/loginUser',
  async (email, { rejectWithValue }) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
      localStorage.setItem('loggedUser', JSON.stringify(data.user));
      return data.user as User;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem('loggedUser');
    },
    setUserFromStorage(state) {
      const saved = localStorage.getItem('loggedUser');
      if (saved) {
        state.user = JSON.parse(saved);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { logout, setUserFromStorage } = userSlice.actions;
export default userSlice.reducer;
