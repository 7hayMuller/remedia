import { TextInput, TextInputProps } from "react-native-paper";
import { StyleSheet } from "react-native";

type InputProps = TextInputProps & {};

const Input = (props: InputProps) => {
  return (
    <TextInput
      activeOutlineColor="#5C03FF"
      mode="outlined"
      outlineColor="#D9D9D9"
      style={styles.input}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 8,
  },
});

export default Input;
