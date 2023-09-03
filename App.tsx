import { Text, View } from "react-native";
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#a597af",
        padding: 28,
      }}
    >
      <Text
        style={{
          color: "#ffffff",
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 48,
        }}
      >
        Nome do evento
      </Text>
      <Text
        style={{
          color: "#6b6b6b",
          fontSize: 16,
        }}
      >
        Domingo, 03 de Setembro de 2023{" "}
      </Text>
    </View>
  );
}
