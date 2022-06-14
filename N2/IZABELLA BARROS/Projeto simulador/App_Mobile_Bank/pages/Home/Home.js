import React, { useEffect, useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Style from "./Style";

export default function Home({ navigation }) {
  const [saldo, setSaldo] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <View style={Style.background}>
      <View style={Style.container}>
        <View>
          <Text style={Style.titulo}>Saldo</Text>
        </View>
        <TextInput
          style={Style.input}
          autoCorrect={false}
          value={1000.0}
          onChangeText={() => {}}
        />
        <TouchableOpacity
          style={Style.ButtonPerfil}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Text style={Style.submitTextPerfil}>
            {" "}
            <Icon name="user" size={18} color="#808080" /> Perfil
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={Style.Button} onPress={() => any}>
          <Text style={Style.submitText}>
            <Icon name="exchange" size={18} /> Transferir
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={Style.Button} onPress={() => any}>
          <Text style={Style.submitText}>
            <Icon name="money" size={18} /> Acompanhar a tranferencia
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={Style.Button} onPress={() => any}>
          <Text style={Style.submitText}>
            <Icon name="th-list" size={18} /> Extrato
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={Style.Button} onPress={() => any}>
          <Text style={Style.submitText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
