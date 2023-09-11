import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";
import { useState } from "react";
export default function Home() {
  const [participants, setParticipants] = useState(["Larissa"]);

  function handleParticipantAdd() {
    if (participants.includes("Lari")) {
      return Alert.alert(
        "Participante existente",
        "Já consta na lista um participante com esse nome"
      );
    }
    setParticipants((prevState) => [...prevState, "Ana"]);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o(a) participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém compareceu ainda no evento? Adicione participantes na lista.
          </Text>
        )}
      />
    </View>
  );
}
