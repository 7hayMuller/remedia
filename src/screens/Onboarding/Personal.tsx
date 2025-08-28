import { View, StyleSheet, Text, Image } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StepIndicator } from "../../components/StepIndicator";
import { RadioButton } from "react-native-paper";
import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  setAge,
  setEmergencyNumber,
  setName,
  setRole,
  setShareMedicationHistory,
} from "../../store/slices/onboardingSlice";
import Label from "../../components/Label";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import FormContainer from "../../components/FormContainer";
import Input from "../../components/Input";

const Personal = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<RouteProp<RootStackParamList, "Personal">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [value, setValue] = useState<"yes" | "no" | "">("");

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [personalStep, setPersonalStep] = useState<number>(
    route.params?.step ?? 0
  );

  const MAX_STEP = 3;

  // dispatch(setName("Maria"));
  // dispatch(setAge(74));

  // dispatch(
  //   addPrescription({ name: "Dipirona", dosage: "500mg", frequency: "8h" })
  // );

  const handleBack = () => {
    if (personalStep > 0) {
      setPersonalStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (personalStep < MAX_STEP) {
      setPersonalStep((prev) => prev + 1);
    } else {
      navigation.navigate("Medicines", { step: currentStep + 1 });
    }
  };

  const firstStep = () => (
    <View style={styles.wrapper}>
      <Label label="Are you a caregiver?" required />

      <RadioButton.Group
        onValueChange={(val) => {
          dispatch(setRole(val === "yes" ? "caregiver" : "patient"));
          setValue(val as "yes" | "no" | "");
        }}
        value={value}
      >
        <View style={styles.inlineOptions}>
          <View style={styles.option}>
            <RadioButton value="yes" />
            <Text>Yes</Text>
          </View>
          <View style={styles.option}>
            <RadioButton value="no" />
            <Text>No</Text>
          </View>
        </View>
      </RadioButton.Group>
    </View>
  );

  const secondStep = () => (
    <View style={styles.wrapper}>
      <Label
        label="What is your name?"
        tooltip="Please enter your name"
        required
      />
      <Input
        onChangeText={(text: any) => dispatch(setName(text))}
        placeholder="Enter your name"
      />
    </View>
  );

  const thirdStep = () => (
    <View style={styles.wrapper}>
      <Label
        label="What is your age?"
        tooltip="Please enter your age"
        required
      />
      <Input
        placeholder="Enter your age"
        onChangeText={(text) => dispatch(setAge(Number(text)))}
      />
    </View>
  );

  const fourthStep = () => (
    <View style={styles.wrapper}>
      <View>
        <Label
          label="Phone number to call in case of emergency"
          tooltip="We will use this contact just if you need assistance"
        />
        <Input
          placeholder="Phone number"
          onChangeText={(text) => dispatch(setEmergencyNumber(text))}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Label label="Share your medication history with them?" />
        <RadioButton.Group
          onValueChange={(val) => {
            dispatch(setShareMedicationHistory(val === "yes" ? true : false));
            setValue(val as "yes" | "no" | "");
          }}
          value={value}
        >
          <View style={styles.inlineOptions}>
            <View style={styles.option}>
              <RadioButton value="yes" />
              <Text>Yes</Text>
            </View>
            <View style={styles.option}>
              <RadioButton value="no" />
              <Text>No</Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <View>
        <StepIndicator
          currentStep={currentStep}
          steps={[
            { label: "Personal", icon: "account" },
            { label: "Medicines", icon: "pill" },
            { label: "Confirm", icon: "check" },
          ]}
        />
      </View>
      <FormContainer
        buttonTitle="Next"
        back={personalStep > 0}
        handleBack={handleBack}
        title="Just a few questions so I can get to know you better."
        subtitle="That way, I’ll be able to take better care of you."
        onPress={() => {
          setPersonalStep(personalStep + 1);
          if (personalStep === 3) {
            setCurrentStep(1);
            navigation.navigate("Medicines", {
              step: currentStep + 1,
            });
          }
        }}
      >
        {personalStep === 0 && firstStep()}
        {personalStep === 1 && secondStep()}
        {personalStep === 2 && thirdStep()}
        {personalStep === 3 && fourthStep()}
      </FormContainer>
      <Image
        source={require("../../../assets/images/img1.png")}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24,
    marginTop: 20,
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
  img: {
    position: "absolute",
    bottom: 0,
    zIndex: 100,
    right: -80,
    width: 300,
    height: 270,
    resizeMode: "contain",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 0,
  },
});
export default Personal;
