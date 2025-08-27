import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton, useTheme } from "react-native-paper";

interface Step {
  label: string;
  icon: string;
}

interface Props {
  steps: Step[];
  currentStep: number;
}

export const StepIndicator: React.FC<Props> = ({ steps, currentStep }) => {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <React.Fragment key={index}>
            <View style={styles.stepWrapper}>
              <View
                style={[
                  styles.outerCircle,
                  isActive && styles.activeOuterCircle,
                  isCompleted && styles.completedOuterCircle,
                ]}
              >
                <View
                  style={[
                    styles.innerCircle,
                    isActive && styles.activeInnerCircle,
                    isCompleted && styles.completedInnerCircle,
                  ]}
                >
                  <IconButton
                    icon={step.icon}
                    size={25}
                    iconColor={"#FFF"}
                    style={{ margin: 0 }}
                  />
                </View>
              </View>
              <Text
                style={[
                  styles.label,
                  isActive && styles.activeLabel,
                  isCompleted && styles.completedLabel,
                ]}
              >
                {step.label}
              </Text>
            </View>

            {index !== steps.length - 1 && <View style={styles.line} />}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 70,
  },
  stepWrapper: {
    alignItems: "center",
    width: 80,
  },
  outerCircle: {
    width: 68,
    height: 68,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#B9B9B9",
    justifyContent: "center",
    alignItems: "center",
  },
  activeOuterCircle: {
    borderColor: "#57CC99",
  },
  innerCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#B9B9B9",
    justifyContent: "center",
    alignItems: "center",
  },
  activeInnerCircle: {
    backgroundColor: "#57CC99",
  },
  label: {
    fontSize: 12,
    color: "#ccc",
    marginTop: 4,
  },
  activeLabel: {
    color: "#34A853",
    fontWeight: "600",
  },
  line: {
    height: 2,
    backgroundColor: "#ddd",
    flex: 1,
    marginHorizontal: 4,
  },
  completedLabel: {
    color: "#354588",
  },
  completedOuterCircle: {
    borderColor: "#354588",
  },
  completedInnerCircle: {
    backgroundColor: "#354588",
  },
});
