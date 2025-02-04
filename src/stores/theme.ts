
import { defineStore } from 'pinia';

export function updateTheme(themeName: string, themeColor: string) {
  localStorage.setItem("theme.themeName", themeName);
  localStorage.setItem("theme.themeColor", themeColor);

}

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useThemeStore = defineStore('theme', {
  // a function that returns a fresh state
  state: () => ({
    themeName: 'saga',
    themeColor: 'blue',
  }),
  // optional getters
  getters: {
    theme: (state: { themeName: string; themeColor: string; }) => {
      return state.themeName + '-' + state.themeColor;
    }    
  },
  // optional actions
  actions: {
    load() {
      const themeName = localStorage.getItem("theme.themeName");
      if(themeName)
      {
        this.themeName= themeName;
      }
      const themeColor = localStorage.getItem("theme.themeColor");
      if(themeColor)
      {
        this.themeColor= themeColor;
      }
      
      
    },
    setColor(colorName: string) {
      this.themeColor = colorName;
      updateTheme(this.themeName, this.themeColor);
    },
  },
});
