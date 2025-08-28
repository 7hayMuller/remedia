import { View, StyleSheet, Text } from "react-native";
import Header from "../../components/Header";
import DailyTips from "../../components/DailyTips";
import MedicationCard from "../../components/MedicationCard";

const PatientHomeScreen = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <DailyTips />
        <Text style={styles.title}>Upcoming Doses</Text>
        <MedicationCard />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontWeight: 600,
    fontSize: 32,
    color: "#4357AD",
  },
});

export default PatientHomeScreen;
