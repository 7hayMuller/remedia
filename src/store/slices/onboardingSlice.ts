import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Prescription {
  name: string;
  dosage: string;
  frequency: string;
}

interface OnboardingState {
  name: string;
  age: number;
  role: "patient" | "caregiver" | null;
  emergencyNumber: string;
  shareMedicationHistory: boolean;
  prescriptions: Prescription[];
  patientRegistered: boolean;
}

const initialState: OnboardingState = {
  name: "",
  age: 0,
  role: null,
  emergencyNumber: "",
  shareMedicationHistory: false,
  prescriptions: [],
  patientRegistered: false,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setAge(state, action: PayloadAction<number>) {
      state.age = action.payload;
    },
    setRole(state, action: PayloadAction<"patient" | "caregiver">) {
      state.role = action.payload;
    },
    setEmergencyNumber(state, action: PayloadAction<string>) {
      state.emergencyNumber = action.payload;
    },
    setShareMedicationHistory(state, action: PayloadAction<boolean>) {
      state.shareMedicationHistory = action.payload;
    },
    addPrescription(state, action: PayloadAction<Prescription>) {
      state.prescriptions.push(action.payload);
    },
    setPatientRegistered(state, action: PayloadAction<boolean>) {
      state.patientRegistered = action.payload;
    },
    clearOnboarding(state) {
      state.name = "";
      state.age = 0;
      state.role = null;
      state.emergencyNumber = "";
      state.shareMedicationHistory = false;
      state.prescriptions = [];
      state.patientRegistered = false;
    },
  },
});

export const {
  setName,
  setAge,
  setRole,
  setEmergencyNumber,
  setShareMedicationHistory,
  addPrescription,
  setPatientRegistered,
  clearOnboarding,
} = onboardingSlice.actions;

export default onboardingSlice.reducer;
