import { View, StyleSheet, Text } from "react-native";
import { Avatar, Button, Icon, IconButton } from "react-native-paper";
import { useAppSelector } from "../store/hooks";
import { useNavigation } from "@react-navigation/native";

const Header = ({ back }: { back?: boolean }) => {
  const name = useAppSelector((state) => state?.onboarding?.name ?? "");
  const age = useAppSelector((state) => state?.onboarding?.age ?? "");
  const role = useAppSelector((state) => state?.onboarding?.role ?? "");

  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {back && (
        <View style={styles.backButton}>
          <IconButton
            iconColor="#fff"
            icon="arrow-left-circle"
            selected
            size={40}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      )}

      <View style={[styles.row, { marginTop: back ? 35 : 16 }]}>
        <Avatar.Icon size={100} icon="account" style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Good Morning,</Text>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subText}>
            {age} years, {role}
          </Text>
        </View>
      </View>
      <Button
        mode="contained"
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        My prescriptions
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: 328,
    width: 373,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    backgroundColor: "#354588",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#4B3A75",
  },
  textContainer: {
    marginLeft: 16,
  },
  greeting: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  name: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },
  subText: {
    color: "#DDDDDD",
    fontSize: 14,
    marginTop: 4,
  },
  button: {
    alignSelf: "center",
    marginLeft: 80,
    borderRadius: 20,
    marginTop: 16,
    backgroundColor: "#57CC99",
    paddingHorizontal: 16,
  },
  buttonLabel: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default Header;
