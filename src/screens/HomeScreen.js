import React from 'react';
import { View, FlatList, Button, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import themeStore from '../store/themeStore';
import useTaskStore from '../store/useTaskStore';
import TaskInput from '../componenets/TaskInput';
import TaskItem from '../componenets/TaskItem';

const HomeScreen = observer(() => {
  const { isDark, toggleTheme } = themeStore;
  const tasks = useTaskStore(state => state.tasks);

  return (
    <View
      style={[styles.container, { backgroundColor: isDark ? '#222' : '#fff' }]}
    >
      <Button title="Toggle Theme" onPress={toggleTheme} />
      <TaskInput />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
    </View>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
