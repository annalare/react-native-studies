import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export default function Home() {
  function handleParticipantAdd() {
    console.log("vc clicou no botão de add");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Domingo, 03 de Setembro de 2023 </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant name="Larissa" />
      <Participant name="Guilherme" />
      <Participant name="Belinha" />
      <Participant name="Lana" />
    </View>
  );
}
