import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
  Button,
  View,
  useState
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.fundo}>

      <View style={styles.card}>

        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.foto}
        />

        <Text style={styles.titulo}>Meu Perfil</Text>

        <Text style={styles.descricao}>
          Faça seu cadastro para continuar.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
        />

        <View style={styles.botao}>
          <Button
            title="Entrar"
            color="#6C63FF"
            onPress={() => alert("Bem-vindo!")}
          />
        </View>

      </View>

      <StatusBar style="light" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#EEF2FF",
  },

  card: {
    backgroundColor: "#FFF",
    margin: 25,
    marginTop: 50,
    padding: 25,
    borderRadius: 20,
    elevation: 8,
    alignItems: "center",
  },

  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#6C63FF",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },

  descricao: {
    color: "#777",
    marginTop: 8,
    marginBottom: 25,
    textAlign: "center",
  },

  input: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 14,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#DDD",
  },

  botao: {
    width: "100%",
    marginTop: 10,
  },
});