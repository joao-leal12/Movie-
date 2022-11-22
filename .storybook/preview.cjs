import {ThemeConfig} from '../src/Styles/theme'


export const parameters = {
  chakra: { 
    ThemeConfig, 
  }, 
  actions: { argTypesRegex: "^on[A-Z].*" },  
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
} 
