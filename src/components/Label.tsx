import { StyleSheet, Text, View } from "react-native";
import { IconButton, Tooltip } from "react-native-paper";

interface LabelProps {
  label: string;
  required?: boolean;
  tooltip?: string;
}

const Label = ({ label, required, tooltip }: LabelProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", width: 250 }}>
      {required && <Text style={styles.required}>*</Text>}
      <Text style={styles.label}>{label}</Text>
      {tooltip && (
        <Tooltip title={tooltip}>
          <IconButton
            icon="information-outline"
            selected
            size={24}
            onPress={() => {}}
          />
        </Tooltip>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  required: {
    color: "red",
    marginRight: 10,
  },
  helper: {
    fontSize: 12,
    color: "#666",
  },
});

export default Label;
