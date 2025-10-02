import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import useTaskStore from '../store/useTaskStore';

export default function TaskInput() {
  const [text, setText] = useState('');
  const addTask = useTaskStore(state => state.addTask);

  const handleAdd = () => {
    if (text.trim() === '') return;
    addTask(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new task..."
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', margin: 10 },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    marginRight: 10,
    padding: 5,
  },
});
