import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';

import theme from './src/theme';

import { Routes } from './src/routes';

import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoad] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent = {true}
      />
      {fontsLoad ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}

