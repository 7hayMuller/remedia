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
import Prescriptions from "../screens/Prescriptions";
import { useAppSelector } from "../store/hooks";
import { FAB } from "react-native-paper";
import { Linking, StyleSheet } from "react-native";
const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  const isPatientRegistered = useAppSelector(
    (state) => state?.onboarding?.patientRegistered ?? false
  );
  async function emergencyCall() {
    const url = `tel:999`;
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  }
  return (
    <>
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
          <Stack.Screen
            name="MedicationHistory"
            component={MedicationHistory}
          />
          <Stack.Screen name="Prescriptions" component={Prescriptions} />
        </Stack.Navigator>
      </NavigationContainer>
      {isPatientRegistered && (
        <FAB
          color="#FFF"
          label="SOS"
          importantForAccessibility="yes"
          accessibilityShowsLargeContentViewer={true}
          accessibilityLabel="Emergency Call"
          size="large"
          style={styles.fab}
          onPress={emergencyCall}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
    fontWeight: 600,
    backgroundColor: "#931621",
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 100,
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
