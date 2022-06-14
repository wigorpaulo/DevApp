import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Cadastro from './Componentes/Cadastro'
import Login from './Componentes/Login'

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Login />
    </View>
  )
}
