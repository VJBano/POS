import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import MainScreenStack from './navigations/mainScreenStack';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    'RobotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
    'PointRegular': require('./assets/fonts/ToThePointRegular-n9y4.ttf'),
    'RobotoBold': require('./assets/fonts/Roboto-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
    <StatusBar style="auto" />
    <MainScreenStack/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
