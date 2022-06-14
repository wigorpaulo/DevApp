import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';

import 'react-native-gesture-handler'

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

{/* <View style={styles.container}>
  <Text>Open up App.js to start working on your app!</Text>
  <StatusBar style="auto" />
</View> */}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
