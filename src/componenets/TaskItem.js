import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useTaskStore from '../store/useTaskStore';

export default function TaskItem({ task }) {
  const toggleTask = useTaskStore(state => state.toggleTask);
  const removeTask = useTaskStore(state => state.removeTask);

  return (
    <View style={styles.item}>
      <Text style={[styles.text, task.done && styles.done]}>{task.text}</Text>
      <Button
        title={task.done ? 'Undo' : 'Done'}
        onPress={() => toggleTask(task.id)}
      />
      <Button title="❌" onPress={() => removeTask(task.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: { flex: 1, fontSize: 16 },
  done: { textDecorationLine: 'line-through', color: 'gray' },
});
