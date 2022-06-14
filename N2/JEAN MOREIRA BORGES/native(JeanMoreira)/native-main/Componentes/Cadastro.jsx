import React, { Component } from 'react';
import { Alert,Text, TextInput, View } from 'react-native';
import ButtonComp from './Button';
import axios from 'axios';

class Cadastro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  escutarUsernameCadastro = e => {
    this.setState({ username: e.target.value })
  }

  escutarPasswordCadastro = e => {
    this.setState({ password: e.target.value })
  }

  efetuarCadastro = () => {
    if(this.state.username === '' || this.state.password === '') {
      Alert.alert('Não foi possível realizar cadastro')
    } else {
      this.props.toLogin(this.state.username, this.state.password)
      Alert.alert('Cadastro realizado com sucesso')
      Alert.alert(this.state.username, this.state.password)

    }
  }

  render() {
    return(
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        
        <Text style={{ justifyContent: "center", alignItems: "center", fontSize: 40 , marginBottom: 80}}>
          Cadastro
        </Text>

        <TextInput
          placeholder={'Username'}
          onChange={this.escutarUsernameCadastro}
          value={this.state.username}
          style= {{height: 50, margin: 12,width: 300 , borderWidth: 1, paddingLeft: 20, paddingRight: 20}}
        />
      
        <TextInput
          secureTextEntry={true}
          placeholder={'Password'}
          onChange={this.escutarPasswordCadastro}
          value={this.state.password}
          style= {{height: 50, margin: 12,width: 300 , borderWidth: 1, paddingLeft: 20, paddingRight: 20, marginBottom: 80}}
        />

        <ButtonComp metodo={this.efetuarCadastro} acao="Cadastrar" style={{paddingLeft: 20, paddingRight: 20}}/>
      </View>
    )
  }
}

export default Cadastro