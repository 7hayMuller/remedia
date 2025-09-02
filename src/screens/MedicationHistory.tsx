import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import { Divider, Icon } from "react-native-paper";
import MedicationCard from "../components/MedicationCard";

const MedicationHistory = () => {
  return (
    <>
      <Header back />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Medication History</Text>
        <View>
          <Text style={styles.date}>
            <Icon source="calendar-month-outline" size={28} />
            02/09/2025
          </Text>
        </View>
        <MedicationCard status="upcoming" />
        <MedicationCard status="taken" />
        <Divider style={styles.divider} />
        <View>
          <Text style={styles.date}>
            <Icon source="calendar-month-outline" size={28} />
            01/09/2025
          </Text>
        </View>
        <MedicationCard status="missed" />
        <Divider style={styles.divider} />
        <View>
          <Text style={styles.date}>
            <Icon source="calendar-month-outline" size={28} />
            31/08/2025
          </Text>
        </View>
        <Text style={styles.text}>Started a new prescription</Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontWeight: "600",
    fontSize: 32,
    color: "#4357AD",
    marginVertical: 30,
  },
  date: {
    fontSize: 24,
    fontWeight: 500,
    color: "#394147",
    marginVertical: 30,
  },
  divider: {
    marginVertical: 40,
  },
  text: {
    textAlign: "center",
    color: "#394147",
    fontSize: 24,
    marginBottom: 30,
  },
});
export default MedicationHistory;
