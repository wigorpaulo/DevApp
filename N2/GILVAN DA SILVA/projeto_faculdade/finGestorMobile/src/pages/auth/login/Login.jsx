import React from 'react'
import { View, Text, Button, Image, Alert } from 'react-native';
import ContainerAuth from '../../../components/containerAuth/ContainerAuth.jsx';
import InputComponent from '../../../components/inputComponent/InputComponent'
import UserApi from '../../../../api/UserApi.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage'

import Style from './Style.jsx'

const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@id', JSON.stringify(value))
        } catch (e) {
            console.log(JSON.stringify(e))
        }
    }

    const submit = () => {

        if (email && password) {
            UserApi.getByEmailAndPassword(email, password)
                .then(resp => {
                    let res = resp.data.response
                    if (!resp.data.error) {
                        Alert.alert('Sucesso!', `Bem vindo, ${res.user.username}`)

                        // AsyncStorage.setItem('id', JSON.stringify(res.user.id))
                        storeData(res.user)
                        // Armazenamento('id', res.user.id)
                        // console.log(res.user.id)

                        setTimeout(() => {
                            props.navigation.navigate('finGestor')
                        }, 1500)
                    } else {
                        Alert.alert('Erro!', res.message)
                    }
                })
                .catch(error => {
                    console.log(JSON.stringify(error))
                })
        } else {
            Alert.alert(
                "Oops!",
                "Preencha todos os campos!",
            );
        }

    }

    return (
        <ContainerAuth>
            <View>
                <Text style={Style.color}>FinGestor</Text>

                <InputComponent
                    onChange={setEmail}
                    value={email}
                    placeholder="Digite seu username..."
                />

                <InputComponent
                    onChange={setPassword}
                    value={password}
                    placeholder="Digite sua senha..."
                    password={true}
                />

                <Button
                    onPress={submit}
                    title="Entrar"
                    color="#0d6efd"
                    style={{
                        padding: 15,
                        marginTop: 20,
                    }}
                />

                <Text
                    style={{
                        margin: 20,
                        textAlign: 'center',
                    }}
                    onPress={e => { props.navigation.navigate('register') }}
                >Cadastre-se</Text>

            </View>
        </ContainerAuth>
    )
}

export default Login