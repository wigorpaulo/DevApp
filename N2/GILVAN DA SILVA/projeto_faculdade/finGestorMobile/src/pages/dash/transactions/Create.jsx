import React from "react";
import { Button, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import AsyncStorage from '@react-native-async-storage/async-storage'
import InputComponent from "../../../components/inputComponent/InputComponent";
import ContainerAuth from "../../../components/containerAuth/ContainerAuth";

import TransactionsApi from '../../../../api/Transactions'
import ReleaseApi from "../../../../api/ReleaseApi";

const Create = () => {

    const [value, setValue] = React.useState('')
    const [type, setType] = React.useState('')
    const [description, setDescription] = React.useState('')

    const submit = () => {
        if (value && type && description) {
            getDataUser()
                .then(data => {
                    TransactionsApi.register({
                        user_id: data.id,
                        description: description,
                        type: type,
                        value: value
                    })
                        .then((resp) => {
                            if (!resp.data.error) {
                                setValue('')
                                setType('')
                                setDescription('')
                                Alert.alert('Sucesso!', resp.data.response.message)
                                // =============================================
                                createRelease(resp.data.response.transaction.id, 1)
                                // =============================================
                            } else {
                                Alert.alert('Erro!', resp.data.response.message)
                            }
                        })
                })

        } else {
            Alert.alert('Oops!', 'Preencha todos os campos.')
        }
    }

    async function getDataUser() {
        try {
            const jsonValue = await AsyncStorage.getItem('@id')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log(JSON.stringify(e))
        }
    }

    const createRelease = (transaction_id, operation_type) => {
        getDataUser()
            .then(data => {
                ReleaseApi.create({
                    user_id: data.id,
                    transaction_id: transaction_id,
                    operation_type: operation_type
                })
            })
    }

    return (
        <ContainerAuth>

            <InputComponent
                onChange={setValue}
                value={value}
                placeholder="Informe um valor..."
            />

            <RNPickerSelect
                onValueChange={(value) => setType(value)}
                useNativeAndroidPickerStyle={false}
                style={{
                    inputAndroid: {
                        borderWidth: 0.5,
                        borderColor: 'black',
                        height: 55,
                        width: 300,
                        marginBottom: 19,
                        borderRadius: 5,
                        padding: 10
                    }
                }}
                items={[
                    { label: "Entrada", value: "E" },
                    { label: "Saída", value: "S" }
                ]}
            />

            <InputComponent
                onChange={setDescription}
                value={description}
                placeholder="Descrição da transação..."
            />

            <Button
                onPress={submit}
                title="Cadastrar"
                color="#0d6efd"
                style={{
                    padding: 15,
                    marginTop: 20,
                }}
            />

        </ContainerAuth>
    )

}

export default Create