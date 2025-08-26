import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

interface Props {
  children: React.ReactNode;
  onPress: () => void;
  mode?: "contained" | "outlined" | "text";
  disabled?: boolean;
  styles?: object;
  dashed?: boolean;
}

export default function BaseButton({
  children,
  dashed,
  onPress,
  mode = "contained",
  disabled,
  styles,
}: Props) {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      disabled={disabled}
      style={[dashed ? style.dashed : style.button, styles]}
      labelStyle={dashed ? style.dashedLabel : style.label}
    >
      {children}
    </Button>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "#6200ee",
    borderRadius: 20,
    maxWidth: 170,
    width: "100%",
    minHeight: 40,
    justifyContent: "center",
  },
  dashed: {
    backgroundColor: "transparent",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#6200ee",
  },
  dashedLabel: {
    color: "#6200ee",
  },
  label: {
    fontFamily: "Inter",
    fontSize: 16,
    textAlign: "center",
    flexWrap: "wrap",
  },
});
