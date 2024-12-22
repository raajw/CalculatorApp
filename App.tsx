import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const CalculatorApp: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handlePress = (value: string) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // Be cautious using eval in production
    } catch (e) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        value={input}
        style={styles.input}
        editable={false}
      />
      <View style={styles.buttons}>
        <View style={styles.row}>
          {['7', '8', '9', '/'].map((value) => (
            <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {['4', '5', '6', '*'].map((value) => (
            <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {['1', '2', '3', '-'].map((value) => (
            <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {['0', '.', '=', '+'].map((value) => (
            <TouchableOpacity
              key={value}
              style={[styles.button, value === '=' ? styles.equalButton : null]}
              onPress={() => (value === '=' ? handleCalculate() : handlePress(value))}
            >
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>Calc by Raj</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  input: {
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 20,
  },
  buttons: {
    flex: 1,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '22%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  equalButton: {
    backgroundColor: '#4CAF50',
  },
  clearButton: {
    backgroundColor: '#f44336',
    padding: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    marginTop: 20,
  },
});

export default CalculatorApp;
