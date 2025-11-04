// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  name: string;
}

const initialState: UserState = {
  email: "",
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    resetUser(state) {
      state.email = "";
      state.name = "";
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
