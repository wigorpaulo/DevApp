import React, { useEffect, useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  Button,
} from "react-native";
import Style from "./Style";

export default function Login({ navigation }) {




  return (
    <KeyboardAvoidingView style={Style.background}>
      <View style={Style.containerLogo}>
        <Image style={Style.logo} source={require("./../../assets/logo.png")} />
      </View>

      <View>
        <Text style={Style.welcome}>Bem vindo(a) ao banco Banke!</Text>
      </View>

      <View style={Style.container}>
        <TextInput
          style={Style.input}
          placeholder="CPF"
          autoCorrect={false}
          keyboardType="numeric"
          onChangeText={() => {}}
        />

        <TextInput
          style={Style.input}
          placeholder="senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={Style.btnSubmit} onPress={() => navigation.navigate("Home")}>
          <Text style={Style.submitText} >Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Style.btnRegister} onPress={() => navigation.navigate("Cadastrar")}>
          <Text style={Style.registerText} >Cadastrar</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}
