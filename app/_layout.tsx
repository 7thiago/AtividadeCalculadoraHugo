import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [first, setFirst] = useState<string | null>(null);
  const [op, setOp] = useState<string | null>(null);

  function pressNumber(n: string) {
    if (display === '0') {
      setDisplay(n);
    } else {
      setDisplay(display + n);
    }
  }

  function pressOperator(operator: string) {
    setFirst(display);
    setOp(operator);
    setDisplay('0');
  }

  function pressEqual() {
    if (!first || !op) return;

    const a = parseFloat(first);
    const b = parseFloat(display);
    let result = 0;

    if (op === '+') result = a + b;
    if (op === '-') result = a - b;
    if (op === '*') result = a * b;
    if (op === '/') result = b !== 0 ? a / b : 0;

    setDisplay(result.toString());
    setFirst(null);
    setOp(null);
  }

  function pressClear() {
    setDisplay('0');
    setFirst(null);
    setOp(null);
  }

  function pressSqrt() {
  const num = parseFloat(display);

  if (num < 0) {
    setDisplay('0');
    return;
  }

  const result = Math.sqrt(num);
  setDisplay(result.toString());
  setFirst(null);
  setOp(null);
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      <View style={styles.row}>
        <Button label="7" onPress={() => pressNumber('7')} />
        <Button label="8" onPress={() => pressNumber('8')} />
        <Button label="9" onPress={() => pressNumber('9')} />
        <Button label="/" onPress={() => pressOperator('/')} />
      </View>

      <View style={styles.row}>
        <Button label="4" onPress={() => pressNumber('4')} />
        <Button label="5" onPress={() => pressNumber('5')} />
        <Button label="6" onPress={() => pressNumber('6')} />
        <Button label="*" onPress={() => pressOperator('*')} />
      </View>

      <View style={styles.row}>
        <Button label="1" onPress={() => pressNumber('1')} />
        <Button label="2" onPress={() => pressNumber('2')} />
        <Button label="3" onPress={() => pressNumber('3')} />
        <Button label="-" onPress={() => pressOperator('-')} />
      </View>

      <View style={styles.row}>
        <Button label="0" onPress={() => pressNumber('0')} />
        <Button label="√" onPress={pressSqrt} />
        <Button label="+" onPress={() => pressOperator('+')} />
        <Button label="C" onPress={pressClear} /> 
        <Button label="=" onPress={pressEqual} />
</View>
    </SafeAreaView>
  );
}

function Button({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  display: {
    padding: 20,
    alignItems: 'flex-end',
  },
  displayText: {
    fontSize: 50,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    padding: 20,
    margin: 5,
    backgroundColor: '#8c0b6e',
    alignItems: 'center',
    borderRadius: 22
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
});