import { View, StyleSheet, Image, Text } from "react-native";
import { Card, Icon } from "react-native-paper";

const MedicationCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Icon source="clock-outline" size={20} color="#fff" />
        <Text style={styles.timeText}>16:00 pm</Text>
      </View>

      <Card style={styles.card}>
        <View style={styles.cardContainer}>
          <Image
            source={require("../../assets/images/medicineExample.webp")}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Losartana 50mg</Text>
            <Text style={styles.label}>
              Quantity: <Text style={styles.value}>2 pills</Text>
            </Text>
            <Text style={styles.label}>
              Period: <Text style={styles.value}>Each 8 hour</Text>
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5C03FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 8,
    gap: 6,
    elevation: 3,
  },
  timeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  card: {
    width: 354,
    height: 183,
    backgroundColor: "#5C03FF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
    justifyContent: "center",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
  },
  image: {
    width: 80,
    height: 120,
    marginRight: 16,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  label: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },
  value: {
    color: "#fff",
    fontWeight: "400",
  },
});

export default MedicationCard;
