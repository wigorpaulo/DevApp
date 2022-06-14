import React from 'react'

import { View, Text, Button, Alert } from 'react-native'
import InputComponent from '../../../components/inputComponent/InputComponent'
import ContainerAuth from '../../../components/containerAuth/ContainerAuth'
import UserApi from '../../../../api/UserApi'

const Register = (props) => {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [cPassword, setCPassword] = React.useState('')
    const [load, setLoad] = React.useState(false)

    const submit = () => {
        console.log(username, password, cPassword)

        if (username && password && cPassword) {

            if (password == cPassword) {

                setLoad(true)
                UserApi.create({
                    username: username,
                    password: password
                })
                    .then(resp => {
                        if (!resp.data.error) {
                            Alert.alert('Sucesso!', 'Usuário cadastrado com sucesso!')
                            setUsername('')
                            setPassword('')
                            setCPassword('')
                        } else {
                            Alert.alert('Erro!', 'Erro ao tentar cadastrar!')
                        }
                        setLoad(false)
                    })

            } else {
                Alert.alert('Erro!', 'As senhas não são iguais.')
            }

        } else {
            Alert.alert('Oops!', 'Informe todos os campos.');
        }

    }

    return (
        <ContainerAuth>

            <Text style={{ fontSize: 30, padding: 20 }}>FinGestor</Text>

            <InputComponent
                onChange={setUsername}
                value={username}
                placeholder="Digite seu username..."
            />

            <InputComponent
                onChange={setPassword}
                value={password}
                placeholder="Digite uma senha..."
            />

            <InputComponent
                onChange={setCPassword}
                value={cPassword}
                placeholder="Confirme sua senha senha..."
            />

            {!load
                ?
                <Button
                    onPress={submit}
                    title="Cadastrar"
                    color="#0d6efd"
                    style={{
                        padding: 15,
                        marginTop: 20,
                    }}
                />
                :
                <Button disabled title='Cadastrar'></Button>
            }



            <Text
                style={{
                    margin: 20,
                    textAlign: 'center',
                }}
                onPress={e => { props.navigation.navigate('Login') }}
            >Login</Text>

        </ContainerAuth>
    )

}

export default Register