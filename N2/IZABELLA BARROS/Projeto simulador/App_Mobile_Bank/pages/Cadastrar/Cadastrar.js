import React, { useEffect, useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  Alert
} from "react-native";
import Style from "./Style";
import axios from "axios";

export default function Cadastrar({ navigation }) {
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    async function salvarUsuario ()  {

    if(name != "" && last_name != "" && cpf != "" && email != "" && password != ""){
      await fetch("http://localhost:8099/salvar", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          last_name: last_name,
          email: email,
          cpf: cpf,
          password: password,
        }),
      }).then( () => navigation.navigate("Home",Alert.alert("Cadastrado com sucesso!")))
      .catch((error) => {
         if(!error?.response) {
          Alert.alert('No Server Response');
         }
         else if(error.response?.status === 406){
          Alert.alert('CPF ou Email inválido!');
         }
         else if(err.response?.status === 400){
          navigation.navigate("Home",Alert.alert('Usuário já existe!'));
         }
        });
  
    }else{
      Alert.alert("Preencha todos os campos!")
    };

  };

  return (
    <KeyboardAvoidingView style={Style.background}>
      <View style={Style.container}>
        <View>
          <Text style={Style.submitText}>Nome</Text>
        </View>

        <TextInput
          style={Style.input}
          placeholder="Nome"
          autoCorrect={false}
          value={name}
          onChangeText={ (text) => {
            setName(text)
          }}
        />

        <Text style={Style.submitText}>Sobrenome</Text>
        <TextInput
          style={Style.input}
          placeholder="Sobrenome"
          autoCorrect={false}
          value ={last_name}
          onChangeText={ (text) => {
            setLastName(text)
          }}
        />

        <Text style={Style.submitText}>CPF</Text>
        <TextInput
          style={Style.input}
          placeholder="CPF"
          autoCorrect={false}
          value={cpf}
          onChangeText={(text) => {
            setCpf(text)
          }}

        />

        <Text style={Style.submitText}>Email</Text>
        <TextInput
          style={Style.input}
          placeholder="email"
          autoCorrect={false}
          value = {email}
          onChangeText={(text) =>{
            setEmail(text) }}
        />

        <Text style={Style.submitText}>Senha</Text>
        <TextInput
          style={Style.input}
          placeholder="senha"
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          onChangeText={(text) => {
            setPassword(text)}}
        />

        <TouchableOpacity
          style={Style.btnSubmit}
          onPress={() => salvarUsuario()}
        >
          <Text style={Style.submitText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
