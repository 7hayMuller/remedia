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
  primary?: boolean;
}

export default function BaseButton({
  children,
  dashed,
  onPress,
  mode = "contained",
  disabled,
  styles,
  primary,
}: Props) {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      disabled={disabled}
      style={[
        dashed ? style.dashed : primary ? style.primary : style.button,
        styles,
      ]}
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
    paddingHorizontal: 20,
    minHeight: 40,
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: "#57CC99",
    borderRadius: 20,
    paddingHorizontal: 20,
    minHeight: 40,
    alignSelf: "flex-start",
  },
  dashed: {
    backgroundColor: "transparent",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#6200ee",
    borderRadius: 20,
    paddingHorizontal: 20,
    minHeight: 40,
    alignSelf: "flex-start",
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
