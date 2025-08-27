import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import FormContainer from "../../components/FormContainer";
import { StepIndicator } from "../../components/StepIndicator";
import { RootStackParamList } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LottieView from "lottie-react-native";
import { useEffect } from "react";

const ScanPrescription = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Medicines">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Confirmation", {
        step: route.params?.step ? route.params?.step + 1 : 0,
      });
    }, 4000);
  }, []);

  return (
    <>
      <StepIndicator
        currentStep={route.params?.step ?? 0}
        steps={[
          { label: "Personal", icon: "account" },
          { label: "Medicines", icon: "pill" },
          { label: "Confirm", icon: "check" },
        ]}
      />
      <FormContainer
        title="We're checking your prescription"
        subtitle="In just a moment, your medications and schedules will be added for you"
      />
      <View style={style.scanContainer}>
        <LottieView
          source={require("../../../assets/lotties/Scan.json")}
          autoPlay
          loop
          style={{ width: "100%", height: 500, marginTop: -100 }}
        />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  scanContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScanPrescription;
