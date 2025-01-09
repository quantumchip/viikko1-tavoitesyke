import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const ageNumber = parseInt(age);
    if (!isNaN(ageNumber)) {
      const lower = Math.round((220 - ageNumber) * 0.65);
      const upper = Math.round((220 - ageNumber) * 0.85);
      setResult(`${lower}-${upper}`);
    } else {
      setResult('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{result}</Text>
      <Button title="Calculate" onPress={calculate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10
  },
  field: {
    marginBottom: 5
  }
});
