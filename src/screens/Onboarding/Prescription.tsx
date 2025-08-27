import FormContainer from "../../components/FormContainer";
import Label from "../../components/Label";
import { StepIndicator } from "../../components/StepIndicator";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { Text, Image, StyleSheet, View } from "react-native";
import Input from "../../components/Input";

const Prescription = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Medicines">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
        back
        handleBack={() => {
          navigation.navigate("Medicines", {
            step: route.params?.step ?? 0,
          });
        }}
        buttonTitle="Save"
        onPress={() => {
          navigation.navigate("Confirmation", {
            step: route.params?.step ? route.params?.step + 1 : 0,
          });
        }}
        title="Fill in the form with the details from your prescriptions"
      >
        <Text style={{ fontWeight: 600, marginBottom: 10 }}>
          If something feels confusing, don’t worry — you can always ask someone
          you trust to help with this step.
        </Text>
        <View style={styles.wrapper}>
          <Label label="Medicine name" tooltip="Medicine name" required />
          <Input placeholder="Medicine name" />
          <Label
            label="Dose (For example: 1 pill)"
            tooltip="Dose (For example: 1 pill)"
            required
          />
          <Input placeholder="Dose (For example: 1 pill)" />
          <Label label="Time" tooltip="Time" required />
          <Input placeholder="Time" />
          <Label
            label="How many times per day?"
            tooltip="How many times per day?"
            required
          />
          <Input placeholder="How many times per day?" />
        </View>
        <Image
          source={require("../../../assets/images/img4.png")}
          style={styles.img4}
        />
      </FormContainer>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
  },
  img4: {
    position: "absolute",
    bottom: -50,
    width: 130,
    height: 130,
  },
});

export default Prescription;
