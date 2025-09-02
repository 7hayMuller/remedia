import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import Personal from "../screens/Onboarding/Personal";
import Medicines from "../screens/Onboarding/Medicines";
import ScanPrescription from "../screens/Onboarding/ScanPrescription";
import Prescription from "../screens/Onboarding/Prescription";
import Confirmation from "../screens/Onboarding/Confirmation";
import PatientHomeScreen from "../screens/Patient/HomeScreen";
import CaregiverHomeScreen from "../screens/Caregiver/HomeScreen";
import MedicationHistory from "../screens/MedicationHistory";
// import { useAppSelector } from "../store/hooks";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Personal"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Personal" component={Personal} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Medicines" component={Medicines} />
        <Stack.Screen name="ScanPrescription" component={ScanPrescription} />
        <Stack.Screen name="Prescription" component={Prescription} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="PatientHome" component={PatientHomeScreen} />
        <Stack.Screen name="CaregiverHome" component={CaregiverHomeScreen} />
        <Stack.Screen name="MedicationHistory" component={MedicationHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
