import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppSelector } from "../store/hooks";

import PatientHomeScreen from "../screens/Patient/HomeScreen";
import CaregiverHomeScreen from "../screens/Caregiver/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import Personal from "../screens/Onboarding/Personal";
import Medicines from "../screens/Onboarding/Medicines";
import ScanPrescription from "../screens/Onboarding/ScanPrescription";
import Prescription from "../screens/Onboarding/Prescription";
import Confirmation from "../screens/Onboarding/Confirmation";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  //const role = useAppSelector((state) => state.onboarding.role);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Personal" component={Personal} />
          <Stack.Screen name="Medicines" component={Medicines} />
          <Stack.Screen name="ScanPrescription" component={ScanPrescription} />
          <Stack.Screen name="Prescription" component={Prescription} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
        </>

        <Stack.Screen name="PatientHome" component={PatientHomeScreen} />

        <Stack.Screen name="CaregiverHome" component={CaregiverHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
