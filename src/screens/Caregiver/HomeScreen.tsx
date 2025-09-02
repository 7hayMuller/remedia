import { ScrollView, StyleSheet, Text } from "react-native";
import Header from "../../components/Header";
import DailyTips from "../../components/DailyTips";
import MedicationCard from "../../components/MedicationCard";
import { Divider } from "react-native-paper";
import MoodCard from "../../components/MoodCard";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const CaregiverHomeScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Missed doses</Text>
        <MedicationCard />
        <Divider style={styles.divider} />
        <MoodCard caregiver />
        <Divider style={styles.divider} />
        <DailyTips />
        <Text style={styles.title}>Medication History</Text>
        <Text style={styles.text}>
          Want to know how you've been doing? Tap here to see your medication
          history and check if you stayed on track.
        </Text>
        <Button
          styles={{ alignSelf: "center", marginTop: 40 }}
          onPress={() => {
            navigation.navigate("MedicationHistory" as never);
          }}
        >
          See medication history
        </Button>
        <Divider style={styles.divider} />
        <Text style={styles.title}>Today's doses taken</Text>
        <MedicationCard disabled />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  divider: {
    marginVertical: 40,
  },
  title: {
    fontWeight: "600",
    fontSize: 32,
    color: "#4357AD",
    marginBottom: 12,
  },
  text: {
    color: "#394147",
    fontSize: 16,
  },
});

export default CaregiverHomeScreen;
