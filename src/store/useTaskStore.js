import create from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist } from "zustand/middleware";

export const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) =>
        set((state) => ({ tasks: [...state.tasks, { id: Date.now(), text: task, done: false }] })),
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
        })),
      removeTask: (id) =>
        set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
    }),
    {
      name: "task-storage", // key in AsyncStorage
      getStorage: () => AsyncStorage,
    }
  )
);
