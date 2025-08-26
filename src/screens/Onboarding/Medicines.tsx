import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import { StepIndicator } from "../../components/StepIndicator";
import { IconButton, RadioButton, TextInput } from "react-native-paper";
import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  addPrescription,
  setAge,
  setName,
  setRole,
} from "../../store/slices/onboardingSlice";
import Label from "../../components/Label";
import BaseButton from "../../components/Button";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Medicines = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<RouteProp<RootStackParamList, "Medicines">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [value, setValue] = useState<"yes" | "no" | "">("no");
  const [medicineStep, setMedicineStep] = useState<number>(0);

  const MAX_STEP = 3;

  const handleBack = () => {
    if (medicineStep > 0) {
      setMedicineStep((prev) => prev - 1);
    } else {
      navigation.navigate("Personal", { step: 3 }); // volta para último step da tela anterior
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

  // dispatch(setName("Maria"));
  // dispatch(setAge(74));

  // dispatch(
  //   addPrescription({ name: "Dipirona", dosage: "500mg", frequency: "8h" })
  // );
  console.log(route.params?.step);
  const firstStep = () => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <BaseButton dashed onPress={() => {}}>
        <Text>Do it manually</Text>
      </BaseButton>
      <BaseButton onPress={() => {}}>
        <Text>Picture</Text>
      </BaseButton>
    </View>
  );

  const secondStep = () => (
    <View style={styles.wrapper}>
      <Label
        label="What is your name?"
        tooltip="Please enter your name"
        required
      />
      <TextInput
        activeOutlineColor="#5C03FF"
        mode="outlined"
        onChangeText={(text) => dispatch(setName(text))}
        outlineColor="#D9D9D9"
        placeholder="Enter your name"
        style={styles.input}
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
      <TextInput
        activeOutlineColor="#5C03FF"
        keyboardType="numeric"
        mode="outlined"
        outlineColor="#D9D9D9"
        placeholder="Enter your age"
        style={styles.input}
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
        <TextInput
          activeOutlineColor="#5C03FF"
          keyboardType="numeric"
          mode="outlined"
          outlineColor="#D9D9D9"
          placeholder="Phone number"
          style={styles.input}
          onChangeText={(text) => dispatch(setAge(Number(text)))}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Label label="Share your medication history with them?" />
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
    </View>
  );

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <View>
        <StepIndicator
          currentStep={route.params?.step ?? 0}
          steps={[
            { label: "Personal", icon: "account" },
            { label: "Medicines", icon: "pill" },
            { label: "Confirm", icon: "check" },
          ]}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.container}>
              {route.params?.step !== 0 && (
                <View>
                  <IconButton
                    icon="arrow-left-circle"
                    iconColor="#fff"
                    size={40}
                    onPress={handleBack}
                    //style={styles.backButton}
                  />
                </View>
              )}
              <Text style={styles.title}>
                We're here to make this simple for you!
              </Text>
              <Text style={styles.subtitle}>
                Take a picture of your prescription, and we’ll scan it to fill
                in your medications automatically.
              </Text>
              <Text style={{ fontWeight: 600, marginTop: 30 }}>
                It’s safer and much easier than entering all the details
                yourself.
              </Text>
              {medicineStep === 0 && firstStep()}
              {medicineStep === 1 && secondStep()}
              {medicineStep === 2 && thirdStep()}
              {medicineStep === 3 && fourthStep()}
              {/* <View style={{ alignItems: "center", marginTop: 20 }}>
          <BaseButton
            onPress={() => {
              setMedicineStep(medicineStep + 1);
              if (medicineStep === 3) {
                setCurrentStep(1);
                //navigation.navigate("Medicine");
              }
            }}
          >
            <Text>Next</Text>
          </BaseButton>
        </View> */}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Image source={require("../../../assets/img2.png")} style={styles.img2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    marginTop: 30,
    marginBottom: 50,
    backgroundColor: "#93C5FD",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: "Inter",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 10,
  },
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
    height: 200,
    resizeMode: "contain",
  },
  input: {
    height: 40,
    borderRadius: 8,
  },
});
export default Medicines;
