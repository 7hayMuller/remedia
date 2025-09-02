import { View, StyleSheet, Image, Text } from "react-native";
import { Card, Icon } from "react-native-paper";

const MedicationCard = ({
  disabled,
  status,
}: {
  disabled?: boolean;
  status?: "upcoming" | "taken" | "missed";
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View
          style={[
            styles.timeContainer,
            disabled && { backgroundColor: "#D9D9D9" },
          ]}
        >
          <Icon
            source="clock-outline"
            size={24}
            color={disabled ? "#394147" : "#fff"}
          />
          <Text style={[styles.timeText, disabled && { color: "#394147" }]}>
            16:00 pm
          </Text>
        </View>
        {status && (
          <View
            style={[
              styles.statusContainer,
              {
                backgroundColor:
                  status === "upcoming"
                    ? "#D9D9D9"
                    : status === "taken"
                    ? "#57CC99"
                    : "#DA2F47",
              },
            ]}
          >
            <Text style={[styles.statusText, disabled && { color: "#394147" }]}>
              {status ?? "Upcoming"}
            </Text>
          </View>
        )}
      </View>

      <Card style={[styles.card, disabled && { backgroundColor: "#D9D9D9" }]}>
        <View style={styles.cardContainer}>
          <Image
            source={require("../../assets/images/medicineExample.webp")}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text style={[styles.title, disabled && { color: "#394147" }]}>
              Losartana 50mg
            </Text>
            <Text style={[styles.label, disabled && { color: "#394147" }]}>
              Quantity:{" "}
              <Text style={[styles.value, disabled && { color: "#394147" }]}>
                2 pills
              </Text>
            </Text>
            <Text style={[styles.label, disabled && { color: "#394147" }]}>
              Period:{" "}
              <Text style={[styles.value, disabled && { color: "#394147" }]}>
                Each 8 hour
              </Text>
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
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5C03FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: "flex-start",
    marginBottom: 8,
    gap: 6,
    elevation: 3,
  },
  timeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 600,
  },
  statusText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 600,
    textTransform: "capitalize",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: "flex-start",
    marginBottom: 8,
    gap: 6,
    elevation: 3,
  },
  card: {
    width: 354,
    height: 183,
    backgroundColor: "#5C03FF",
    borderRadius: 24,
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
