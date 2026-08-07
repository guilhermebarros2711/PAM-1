import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';

export default function App() {
  const [dark, setDark] = useState(false);

  const tema = {
    fundo: dark ? "#121212" : "#EEF2FF",
    card: dark ? "#1E1E1E" : "#FFFFFF",
    texto: dark ? "#FFFFFF" : "#222222",
    subtitulo: dark ? "#B0B0B0" : "#666666",
    input: dark ? "#2C2C2C" : "#F5F5F5",
    borda: dark ? "#444444" : "#DDDDDD",
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: tema.fundo }]}
      contentContainerStyle={{ paddingVertical: 40 }}
    >
      <View
        style={[styles.card, { backgroundColor: tema.card }]}
      >
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.imagem}
        />

        <Text
          style={[styles.titulo, { color: tema.texto }]}
        >
          Meu Perfil
        </Text>

        <Text
          style={[styles.subtitulo, { color: tema.subtitulo }]}
        >
          Personalize sua conta
        </Text>

        <TextInput
          placeholder="Nome"
          placeholderTextColor={dark ? "#888" : "#999"}
          style={[
            styles.input,
            {
              backgroundColor: tema.input,
              borderColor: tema.borda,
              color: tema.texto,
            },
          ]}
        />

        <TextInput
          placeholder="E-mail"
          placeholderTextColor={dark ? "#888" : "#999"}
          style={[
            styles.input,
            {
              backgroundColor: tema.input,
              borderColor: tema.borda,
              color: tema.texto,
            },
          ]}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor={dark ? "#888" : "#999"}
          secureTextEntry
          style={[
            styles.input,
            {
              backgroundColor: tema.input,
              borderColor: tema.borda,
              color: tema.texto,
            },
          ]}
        />

        <View style={styles.botao}>
          <Button
            title={dark ? "Tema Claro" : "Tema Escuro"}
            color="#6C63FF"
            onPress={() => setDark(!dark)}
          />
        </View>

        <View style={{ height: 15 }} />

        <View style={styles.botao}>
          <Button
            title="Salvar Perfil"
            color="#22C55E"
            onPress={() => alert("Perfil salvo com sucesso!")}
          />
        </View>
      </View>

      <StatusBar style={dark ? "light" : "dark"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    marginHorizontal: 25,
    borderRadius: 20,
    padding: 25,
    elevation: 8,
    alignItems: "center",
  },

  imagem: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#6C63FF",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitulo: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 25,
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
  },

  botao: {
    width: "100%",
  },
});