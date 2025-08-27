import React, { useEffect } from "react";
import { Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../store/hooks";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";

type RootStackParamList = {
  Splash: undefined;
  Personal: undefined;
  PatientHome: undefined;
  CaregiverHome: undefined;
};

export default function SplashScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const role = useAppSelector((state) => state.user.role);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!role) {
        navigation.replace("Personal");
      } else if (role === "patient") {
        navigation.replace("PatientHome");
      } else {
        navigation.replace("CaregiverHome");
      }
    }, 1500);

    return () => clearTimeout(timeout);
  }, [role]);

  return (
    <LinearGradient
      colors={["#5DADEC", "#46529C", "#203460"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Remedia</Text>
      <Text style={styles.subtitle}>
        Here to help you focus on what really matters
      </Text>
      <ActivityIndicator size="large" color="#FFFFFF" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "HomemadeApple",
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  logo: {
    width: 400,
    height: 600,
    marginTop: -100,
  },
});
