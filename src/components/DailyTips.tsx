import { View, Text, Image, StyleSheet } from "react-native";

const DailyTips = () => {
  return (
    <View style={styles.tipContainer}>
      <Text style={styles.tip}>
        Don’t forget to drink water, your body will thank you!
      </Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/plant.png")}
        resizeMode="contain"
        width={150}
        height={150}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tipContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "nowrap",
    padding: 16,
  },
  tip: {
    width: 190,
    fontWeight: 500,
    color: "#4357AD",
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default DailyTips;
