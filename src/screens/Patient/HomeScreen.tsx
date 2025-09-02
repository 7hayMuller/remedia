import { ScrollView, StyleSheet, Text } from "react-native";
import Header from "../../components/Header";
import DailyTips from "../../components/DailyTips";
import MedicationCard from "../../components/MedicationCard";
import { Divider } from "react-native-paper";
import MoodCard from "../../components/MoodCard";
import Button from "../../components/Button";
import { use } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

const PatientHomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <DailyTips />
        <Text style={styles.title}>Upcoming Doses</Text>
        <MedicationCard />
        <Divider style={styles.divider} />
        <MoodCard />
        <Divider style={styles.divider} />
        <Text style={styles.title}>Medication History</Text>
        <Text style={styles.text}>
          Want to know how you've been doing? Tap here to see your medication
          history and check if you stayed on track.
        </Text>
        <Button
          styles={{ alignSelf: "center", marginTop: 40 }}
          onPress={() => {
            navigation.navigate("MedicationHistory");
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

export default PatientHomeScreen;
