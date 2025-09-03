import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Dialog, Divider, IconButton } from "react-native-paper";
import { RootStackParamList } from "../navigation/types";
import MedicationCard from "../components/MedicationCard";
import BaseButton from "../components/Button";
import Header from "../components/Header";
import { useState } from "react";

const Prescriptions = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const Confirmation = ({
    openConfirmation,
    hideDialog,
  }: {
    openConfirmation: boolean;
    hideDialog: () => void;
  }) => {
    return (
      <Dialog dismissable visible={openConfirmation} onDismiss={hideDialog}>
        <Dialog.Content>
          <Text style={styles.text}>
            You're deleting this prescription. You won't be able to receive more
            notifications about this medicine.
          </Text>
          <Text style={[styles.text, { marginTop: 30 }]}>Are you sure?</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <BaseButton
              dashed
              onPress={hideDialog}
              styles={{ width: 120, marginRight: 10 }}
            >
              <Text>Cancel</Text>
            </BaseButton>
            <BaseButton
              onPress={() => {}}
              styles={{
                width: 120,
                backgroundColor: "#DA2F47",
              }}
            >
              <Text>Delete</Text>
            </BaseButton>
          </View>
        </Dialog.Actions>
      </Dialog>
    );
  };

  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <IconButton
            iconColor="#354588"
            icon="arrow-left-circle"
            selected
            size={40}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.title}>My prescriptions</Text>
        </View>
        <MedicationCard noTime />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <BaseButton
            dashed
            onPress={() => {
              setOpenConfirmation(true);
            }}
            styles={{ width: 150 }}
          >
            <Text>Delete</Text>
          </BaseButton>
          <BaseButton onPress={() => {}} styles={{ width: 150 }}>
            <Text>Edit</Text>
          </BaseButton>
        </View>
        <Divider style={{ marginVertical: 20 }} />
        <MedicationCard noTime />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <BaseButton
            dashed
            onPress={() => {
              setOpenConfirmation(true);
            }}
            styles={{ width: 150 }}
          >
            <Text>Delete</Text>
          </BaseButton>
          <BaseButton onPress={() => {}} styles={{ width: 150 }}>
            <Text>Edit</Text>
          </BaseButton>
        </View>
        <Divider style={{ marginVertical: 20 }} />
        <BaseButton primary onPress={() => {}} styles={{ marginBottom: 50 }}>
          <Text>Add new prescription</Text>
        </BaseButton>
      </ScrollView>
      <Confirmation
        openConfirmation={openConfirmation}
        hideDialog={() => setOpenConfirmation(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -20,
  },
  title: {
    fontWeight: "600",
    fontSize: 32,
    color: "#4357AD",
    marginVertical: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
  },
});
export default Prescriptions;
