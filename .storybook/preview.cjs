import {ThemeConfigs} from '../src/Styles/theme'


export const parameters = {
  chakra: { 
    theme: ThemeConfigs,   
  }, 
  actions: { argTypesRegex: "^on[A-Z].*" },  
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
} 
