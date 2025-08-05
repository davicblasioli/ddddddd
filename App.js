import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from "react";

export default function App() {

  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  function soma(){
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Digite números válidos');
      return;
    }
    setResultado(n1 + n2);
  }
  function menos(){
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Digite números válidos');
      return;
    }
    setResultado(n1 - n2);
  }
  function divi(){
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Digite números válidos');
      return;
    }
    if (n2 === 0) {
      setResultado('Não pode dividir por zero');
      return;
    }
    setResultado(n1 / n2);
  }
  function mult(){
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Digite números válidos');
      return;
    }
    setResultado(n1 * n2);
  }

  return (
      <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
      >

        {/* Inputs para números */}
        <TextInput
            style={styles.input}
            placeholder="Digite o primeiro número"
            keyboardType="numeric"
            value={numero1}
            onChangeText={setNumero1}
        />
        <TextInput
            style={styles.input}
            placeholder="Digite o segundo número"
            keyboardType="numeric"
            value={numero2}
            onChangeText={setNumero2}
        />

        {/* Resultado */}
        <Text style={styles.numeroTexto}>Número é {resultado}</Text>

        {/* Botões */}
        <TouchableOpacity style={styles.botaoAumenta} onPress={soma}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoDiminui} onPress={menos}>
          <Text style={styles.botaoTexto}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAumenta} onPress={divi}>
          <Text style={styles.botaoTexto}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoDiminui} onPress={mult}>
          <Text style={styles.botaoTexto}>*</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },

  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#fff',
  },

  numeroTexto: {
    fontSize: 36,
    fontWeight: '700',
    color: '#4a90e2',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },

  botaoAumenta: {
    backgroundColor: '#43a047',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 16,
  },

  botaoDiminui: {
    backgroundColor: '#e53935',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 3,
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
  },
});
