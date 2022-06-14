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

export default function Perfil({ navigation }) {
  return (
    <KeyboardAvoidingView style={Style.background}>
      <View style={Style.container}>
        <View >
          <Text style={Style.submitText}>Nome</Text>
        </View>

        <TextInput
          style={Style.input}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <Text style={Style.submitText}>Sobrenome</Text>
        <TextInput
          style={Style.input}
          placeholder="Sobrenome"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <Text style={Style.submitText}>CPF</Text>
        <TextInput
          style={Style.input}
          placeholder="CPF"
          autoCorrect={false}
          keyboardType="numeric"
          onChangeText={() => {}}
        />

        <Text style={Style.submitText} >Email</Text>
        <TextInput
          style={Style.input}
          placeholder="email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <Text style={Style.submitText} >Senha</Text>
        <TextInput
          style={Style.input}
          placeholder="senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity
          style={Style.btnSubmit}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={Style.submitText}>Atualizar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
