import { View, Text, StyleSheet, Image, Linking, Alert } from "react-native";
import Button from "./Button";
import { useAppSelector } from "../store/hooks";

const MoodCard = ({ caregiver }: { caregiver?: boolean }) => {
  const emergencyNumber = useAppSelector(
    (state) => state?.onboarding?.emergencyNumber ?? ""
  );

  const openDialer = async () => {
    const url = `tel:${emergencyNumber}`;
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Erro", "Não foi possível abrir o discador");
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {caregiver
          ? "How is Luna feeling today?"
          : "How are you feeling today?"}
      </Text>
      <Text style={styles.subtitle}>
        {caregiver
          ? "Here you can follow how Luna is feeling today according to her answer. You also can call her if there is something akward."
          : "Click over the emojis to register how you are feeling today"}
      </Text>
      <View style={styles.emojis}>
        {caregiver ? (
          <Image
            style={styles.emoji}
            source={require("../../assets/images/sick.png")}
          />
        ) : (
          <>
            <Image
              style={styles.emoji}
              source={require("../../assets/images/happy.png")}
            />
            <Image
              style={styles.emoji}
              source={require("../../assets/images/neutral.png")}
            />
            <Image
              style={styles.emoji}
              source={require("../../assets/images/sick.png")}
            />
            <Image
              style={styles.emoji}
              source={require("../../assets/images/sad.png")}
            />
            <Image
              style={styles.emoji}
              source={require("../../assets/images/mad.png")}
            />
          </>
        )}
      </View>
      <Button
        onPress={openDialer}
        primary
        styles={{
          alignSelf: "center",
          marginTop: 40,
        }}
      >
        Call Luna
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#354588",
    paddingVertical: 28,
    paddingHorizontal: 20,
    marginVertical: 8,
    elevation: 2,
    borderRadius: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
  },
  emojis: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  emoji: {
    width: 50,
    height: 50,
  },
});

export default MoodCard;
