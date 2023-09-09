import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export default function Home() {
  const participants = [
    "Larissa",
    "Guilherme",
    "Ceça",
    "José",
    "Ana",
    "Lizzy",
    "Paulo",
    "Belinha",
    "Luz",
    "Violeta",
    "Helena",
    "Maria",
  ];

  function handleParticipantAdd() {
    console.log("vc clicou no botão de add");
  }

  function handleParticipantRemove(name: string) {
    console.log(`botao de remover ${name}`);
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove("Larissa")}
          />
        ))}
      </ScrollView>
    </View>
  );
}
