import { ThemeProvider, createTheme } from '@rneui/themed';
import '@rneui/themed';

declare module '@rneui/themed' {
  export interface Colors {
    darkBlue:string;
  }
}

export const theme = createTheme({
    lightColors: {
        darkBlue: '#36454F'
    },
    mode: 'light',
  });