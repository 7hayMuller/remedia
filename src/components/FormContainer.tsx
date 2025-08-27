import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
} from "react-native";
import BaseButton from "./Button";
import { IconButton } from "react-native-paper";

interface FormContainerProps {
  children?: React.ReactNode;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  buttonTitle?: string;
  back?: boolean;
  handleBack?: () => void;
}

const FormContainer = ({
  children,
  back,
  title,
  subtitle,
  onPress,
  buttonTitle,
  handleBack,
}: FormContainerProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            {back && (
              <IconButton
                iconColor="#fff"
                icon="arrow-left-circle"
                selected
                style={styles.backButton}
                size={45}
                onPress={handleBack}
              />
            )}
            <Text style={[styles.title, { marginTop: back ? 70 : 30 }]}>
              {title}
            </Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            {children}
            {buttonTitle && onPress && (
              <View style={{ alignItems: "center", marginTop: 30 }}>
                <BaseButton onPress={onPress}>
                  <Text>{buttonTitle}</Text>
                </BaseButton>
              </View>
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 371,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    marginTop: 30,
    marginBottom: 50,
    backgroundColor: "#93C5FD",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: "Inter",
  },
  subtitle: {
    fontSize: 20,
    marginTop: 10,
  },
  wrapper: {
    marginBottom: 24,
    marginTop: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 0,
  },
});

export default FormContainer;
