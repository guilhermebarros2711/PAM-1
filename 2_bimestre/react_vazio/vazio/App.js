import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.title}>React Native</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Objetivo</Text>
        <Text style={styles.text}>
          Aprender a criar apps mobiles usando React Native.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Componentes</Text>
        <Text style={styles.item}>• View</Text>
        <Text style={styles.item}>• Text</Text>
        <Text style={styles.item}>• TextInput</Text>
        <Text style={styles.item}>• StatusBar</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Digite seu nome</Text>

        <TextInput
          style={styles.input}
          placeholder="Seu nome"
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Linguagem</Text>
        <Text style={styles.text}>
          JavaScript é utilizado para desenvolver aplicações em React Native.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e7eb',
    padding: 25,
    paddingTop: 60,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 18,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 10,
  },

  item: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 6,
  },

  text: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 22,
  },

  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },

  footer: {
    marginTop: 20,
    textAlign: 'center',
    color: '#6b7280',
  },
});