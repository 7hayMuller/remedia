import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import onboardingReducer from "./slices/onboardingSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    onboarding: onboardingReducer,
    // prescriptions: prescriptionsReducer, (depois)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
