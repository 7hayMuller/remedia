import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Role = "patient" | "caregiver" | null;

interface UserState {
  name: string;
  role: Role;
  age: number;
  emergencyNumber: string;
  shareMedicationHistory: boolean;
}

const initialState: UserState = {
  name: "",
  role: null,
  age: 0,
  emergencyNumber: "",
  shareMedicationHistory: false,
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
    setAge(state, action: PayloadAction<number>) {
      state.age = action.payload;
    },
    setEmergencyNumber(state, action: PayloadAction<string>) {
      state.emergencyNumber = action.payload;
    },
    setShareMedicationHistory(state, action: PayloadAction<boolean>) {
      state.shareMedicationHistory = action.payload;
    },
    resetUser(state) {
      state.name = "";
      state.role = null;
      state.age = 0;
      state.emergencyNumber = "";
      state.shareMedicationHistory = false;
    },
  },
});

export const { setRole, setName, resetUser } = userSlice.actions;
export default userSlice.reducer;
