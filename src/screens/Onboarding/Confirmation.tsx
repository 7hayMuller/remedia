import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import FormContainer from "../../components/FormContainer";
import { StepIndicator } from "../../components/StepIndicator";
import { RootStackParamList } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import BaseButton from "../../components/Button";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setPatientRegistered } from "../../store/slices/onboardingSlice";

const Confirmation = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Medicines">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const caregiver = useAppSelector((state) => state.onboarding.role);
  const name = useAppSelector((state) => state.onboarding.name);
  const age = useAppSelector((state) => state.onboarding.age);
  const emergencyNumber = useAppSelector(
    (state) => state.onboarding.emergencyNumber
  );
  const shareMedicationHistory = useAppSelector(
    (state) => state.onboarding.shareMedicationHistory
  );
  const dispatch = useAppDispatch();

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
      <FormContainer title="Please take a moment to check if the information is correct">
        <Card style={styles.card}>
          <View style={styles.cardContainer}>
            <Image
              source={require("../../../assets/images/medicineExample.webp")}
              style={styles.image}
            />
            <View>
              <Text style={styles.title}>Losartana 50mg</Text>
              <Text style={styles.text}>Dose: 2 pills</Text>
              <Text style={styles.text}>Period: Each 8 hour</Text>
            </View>
          </View>
        </Card>

        <View style={styles.buttonRow}>
          <BaseButton
            dashed
            onPress={() => {
              navigation.navigate("Prescription", {
                step: route.params?.step ? route.params?.step - 1 : 0,
              });
            }}
          >
            <Text>It's not correct</Text>
          </BaseButton>
          <BaseButton
            onPress={() => {
              console.log({
                caregiver,
                name,
                age,
                emergencyNumber,
                shareMedicationHistory,
              });
              dispatch(setPatientRegistered(true));
              navigation.navigate("PatientHome");
            }}
          >
            <Text>Complete</Text>
          </BaseButton>
        </View>
        <Image
          source={require("../../../assets/images/img3.png")}
          style={styles.img3}
        />
      </FormContainer>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    flexDirection: "row",
    flex: 1,
    flexWrap: "nowrap",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 2,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 50,
  },
  img3: {
    position: "absolute",
    bottom: -200,
    zIndex: 100,
    right: 0,
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default Confirmation;
