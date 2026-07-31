import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>

      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        Bem-vindo!
      </Text>

      <Text style={styles.subtitulo}>
        Preencha seus dados abaixo.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
      />

      <Button
        title="Cadastrar"
        onPress={() => alert("Cadastro realizado!")}
      />

      <StatusBar style="auto" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F8",
    padding: 20,
  },

  imagem: {
    width: 180,
    height: 180,
    alignSelf: "center",
    borderRadius: 90,
    marginTop: 30,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3B82F6",
  },

  subtitulo: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
});