import { View, StyleSheet, Text, Image } from "react-native";
import { StepIndicator } from "../../components/StepIndicator";

import React, { useState } from "react";

import BaseButton from "../../components/Button";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import FormContainer from "../../components/FormContainer";

const Medicines = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Medicines">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [medicineStep, setMedicineStep] = useState<number>(0);

  const MAX_STEP = 3;

  const handleBack = () => {
    if (medicineStep > 0) {
      setMedicineStep((prev) => prev - 1);
    } else {
      navigation.navigate("Personal", { step: 3 });
    }
  };

  const handleNext = () => {
    if (medicineStep < MAX_STEP) {
      setMedicineStep((prev) => prev + 1);
    } else {
      // último step → finalização ou próximo fluxo
      //navigation.navigate("Confirm"); // se existir uma próxima tela
    }
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <StepIndicator
        currentStep={route.params?.step ?? 0}
        steps={[
          { label: "Personal", icon: "account" },
          { label: "Medicines", icon: "pill" },
          { label: "Confirm", icon: "check" },
        ]}
      />

      <FormContainer
        back
        title="We're here to make this simple for you!"
        subtitle="Take a picture of your prescription, and we’ll scan it to fill"
        handleBack={handleBack}
      >
        <Text style={{ fontWeight: 600, marginTop: 30 }}>
          It’s safer and much easier than entering all the details yourself.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <BaseButton
            dashed
            onPress={() => {
              navigation.navigate("Prescription", {
                step: route.params?.step ?? 0,
              });
            }}
            styles={{ marginRight: 10 }}
          >
            <Text>Do it manually</Text>
          </BaseButton>
          <BaseButton
            onPress={() => {
              navigation.navigate("ScanPrescription", {
                step: route.params?.step ?? 0,
              });
            }}
          >
            <Text>Take picture</Text>
          </BaseButton>
        </View>
      </FormContainer>
      <Image
        source={require("../../../assets/images/img2.png")}
        style={styles.img2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24,
    marginTop: 30,
  },
  inlineOptions: {
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  img2: {
    position: "absolute",
    bottom: 0,
    zIndex: 100,
    right: 50,
    width: 300,
    height: 250,
    resizeMode: "contain",
  },
  input: {
    height: 40,
    borderRadius: 8,
  },
});
export default Medicines;
