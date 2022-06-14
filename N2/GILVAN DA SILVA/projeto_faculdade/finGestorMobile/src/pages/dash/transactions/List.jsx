import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { FlatList, View, Text, Button, Alert, Modal, StyleSheet, Pressable } from 'react-native'
import Transactions from '../../../../api/Transactions'
import InputComponent from '../../../components/inputComponent/InputComponent'
import RNPickerSelect from "react-native-picker-select";
import ReleaseApi from '../../../../api/ReleaseApi'

const List = () => {

    const [list, setList] = React.useState([])
    const [modalVisible, setModalVisible] = React.useState(false)
    const [idEdit, setIdEdit] = useState('');
    const [valueEdit, setValueEdit] = useState('')
    const [typeEdit, setTypeEdit] = useState('')
    const [descEdit, setDescEdit] = useState('')

    React.useState(() => {
        getDataUser()
            .then(data => {
                getAll(data.id)
            })
    }, [])

    const getAll = (id) => {
        Transactions.getAll(id)
            .then(resp => {
                setList(resp.data.response.transactions)
            }).catch(error => {
                // console.log(JSON.stringify(error))
            })
    }

    const destroy = (id) => {
        Alert.alert(
            "Desativar item?",
            "Não há opção de ativar novamente!",
            [
                {
                    text: "Cancelar",
                },
                {
                    text: "OK",
                    onPress: () => {
                        Transactions.deleteItem(id)
                            .then(() => {
                                Alert.alert('Desativado com sucesso!')
                                // =============================================
                                createRelease(id, 3)
                                // =============================================
                                getDataUser()
                                    .then(data => {
                                        getAll(data.id)
                                    })
                            })
                    }
                }
            ]
        )
    }

    async function getDataUser() {
        try {
            const jsonValue = await AsyncStorage.getItem('@id')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log(JSON.stringify(e))
        }
    }

    const getDataByEdit = (id) => {
        setIdEdit(id)
        Transactions.getById(id)
            .then(resp => {
                let data = resp.data
                if (!data.error) {
                    setValueEdit(data.response.transaction.value)
                    setDescEdit(data.response.transaction.description)
                    setTypeEdit(data.response.transaction.type)
                }
            })
    }

    const formEdit = () => {
        getDataUser()
            .then(data => {
                Transactions.edit(idEdit, {
                    user_id: data.id,
                    description: descEdit,
                    type: typeEdit,
                    value: valueEdit
                })
                    .then(resp => {
                        console.log(resp)
                        if (!resp.data.error) {
                            // =============================================
                            createRelease(idEdit, 2)
                            // =============================================
                            getAll(data.id)
                            Alert.alert('Editado com sucesso!')
                            setModalVisible(false)
                            // setEdited(false)
                            setValueEdit('')
                            setTypeEdit('')
                            setDescEdit('')
                        }
                    })
            })
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
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.")
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        {/* ================Form Edit================== */}
                        <InputComponent
                            onChange={setValueEdit}
                            value={valueEdit}
                            placeholder="Informe um valor..."
                        />

                        <RNPickerSelect
                            onValueChange={(value) => setTypeEdit(value)}
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
                            value={typeEdit}
                        />

                        <InputComponent
                            onChange={setDescEdit}
                            value={descEdit}
                            placeholder="Informe uma descrição..."
                        />

                        <Button
                            onPress={() => { formEdit() }}
                            color='blue'
                            title='Editar'
                        />
                        {/* =========================================== */}

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>

            <FlatList
                data={list}
                renderItem={({ item }) => (

                    <View style={{
                        backgroundColor: '#FFFAFA',
                        marginBottom: 5,
                        marginTop: 5,
                        padding: 20
                    }}>
                        <View style={{ paddingBottom: 10 }}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: 15
                                }}>
                                R$ {item.value}
                            </Text>

                            <Text
                                style={{
                                    backgroundColor: item.type == 'E' ? 'lightgreen' : '#FF0000',
                                    padding: 10,
                                    margin: 10,
                                    borderRadius: 5,
                                    textAlign: 'center',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>{item.type == "E" ? "Entrada" : "Saída"}
                            </Text>

                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 15
                                }}>{item.description}</Text>

                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    borderColor: 'black',
                                    marginTop: 15
                                }}
                            >
                                <Text style={{ flex: 1, textAlign: 'right', marginRight: 10 }}>
                                    <Button
                                        onPress={() => { destroy(item.id) }}
                                        color='red'
                                        title='Excluir'
                                    />
                                </Text>
                                <Text style={{ flex: 1 }}>
                                    <Button
                                        color='blue'
                                        title='Editar'
                                        onPress={() => {
                                            getDataByEdit(item.id)
                                            setModalVisible(true)
                                        }}
                                    />
                                </Text>
                            </View>

                        </View>

                    </View>

                )}
            />

        </View>
    )

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: 370
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default List