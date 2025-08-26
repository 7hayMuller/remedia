import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Role = "patient" | "caregiver" | null;

interface UserState {
  name: string;
  role: Role;
}

const initialState: UserState = {
  name: "",
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<Role>) {
      state.role = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    resetUser(state) {
      state.name = "";
      state.role = null;
    },
  },
});

export const { setRole, setName, resetUser } = userSlice.actions;
export default userSlice.reducer;
