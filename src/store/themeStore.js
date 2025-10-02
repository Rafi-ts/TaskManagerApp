import { makeAutoObservable } from "mobx";

class ThemeStore {
  isDark = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme() {
    this.isDark = !this.isDark;
  }
}

const themeStore = new ThemeStore();
export default themeStore;
