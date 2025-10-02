📘 Task Manager App (React Native)

A simple Task Manager App built with React Native to demonstrate advanced state management using:

🟢 Zustand – for managing tasks (CRUD + persistence)

🟣 MobX – for theme switching (Light/Dark mode)

💾 AsyncStorage – for local persistence

🚀 Features

✅ Add new tasks
✅ Mark tasks as complete / undo
✅ Delete tasks
✅ Light/Dark theme toggle
✅ Persistent storage (data remains after app reload)

🛠 Tech Stack

React Native

Zustand

MobX

AsyncStorage

📂 Project Structure
src/
│── store/
│   ├── useTaskStore.js     # Zustand store for tasks
│   ├── themeStore.js       # MobX store for theme
│── components/
│   ├── TaskInput.js        # Input box to add new tasks
│   ├── TaskItem.js         # Task item UI with toggle/delete
│── screens/
│   └── HomeScreen.js       # Main screen
│── App.js


⚡ Installation & Setup

Clone the repo:

git clone https://github.com/yourusername/task-manager-rn.git
cd task-manager-rn


Install dependencies:

npm install
# or yarn install


Run on Android:

npx react-native run-android


Run on iOS (Mac only):

npx pod-install
npx react-native run-ios

📚 Learning Goals

Learn Zustand for lightweight state management.

Learn MobX for reactive state & theme management.

Implement persistence with AsyncStorage.

Practice clean code & GitHub documentation.

🎯 Future Improvements

Add task categories (Work, Personal, Shopping).

Add due dates & reminders.

Improve UI with animations.
