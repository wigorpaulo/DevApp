import React, { Component } from 'react';
import { Alert, Pressable, StyleSheet,Text, TextInput, View } from 'react-native';
import ButtonComp from './Button';
import axios from 'axios';
import Cadastro from './Cadastro';
import Listagem from './Listagem';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usernameLogin: '',
      passwordLogin: '',
      usernameCadastro: '',
      passwordCadastro: '',
      isLoggedin: false,
      cadastro: false
    }
  }

  escutarInputUsername = e => {
    this.setState({ usernameLogin: e.target.value })
  }

  escutarInputPassword = e => {
    this.setState({ passwordLogin: e.target.value })
  }

  loginVerificator = async () => {
    await axios
      .post('http://localhost:9000/api/user/login', {
        username: this.state.usernameLogin,
        password: this.state.passwordLogin
      })
      .then(response => {
        Alert.alert('Login realizado com sucesso')
        this.setState({ isLoggedin: true })
      })
      .catch(error => {
        if (error.response?.status === 406) {
          Alert.alert('Usuário inválido')
        } else if (error.response?.status === 400) {
          Alert.alert('Não foi possível realizar login. Tente novamente mais tarde')
        } 
        
      })
  }

  login = () => {
    if(this.state.passwordLogin !== this.state.passwordCadastro || this.state.usernameLogin !== this.state.usernameCadastro) {
      Alert.alert('Login realizado com sucesso')
      Alert.alert(this.state.passwordCadastro, this.state.usernameCadastro)
      Alert.alert(this.state.passwordLogin, this.state.usernameLogin)
      this.setState({ 
        isLoggedin: true, 
        usernameLogin: '', 
        passwordLogin: '' 
      })
    } else {
      Alert.alert('Não foi possível realizar login. Tente novamente')
      Alert.alert(this.state.passwordCadastro, this.state.usernameCadastro)
      Alert.alert(this.state.passwordLogin, this.state.usernameLogin)
      this.setState({ 
        isLoggedin: false, 
        usernameLogin: '', 
        passwordLogin: '' 
      })
    }
  }

  cadastro = () => {
    this.setState({cadastro: true})
  }

  toLogin = (userCadastro, passCadastro) => {
    this.setState({ 
      cadastro: false, 
      usernameCadastro: userCadastro, 
      passwordCadastro: passCadastro 
    })
  }

  render() {
      return (
        <View >
          <View style={(!this.state.isLoggedin) ? styles.show : styles.hide }>
            <View style={(!this.state.cadastro) ? styles.show : styles.hide }>
              <Text style={{ justifyContent: "center", alignItems: "center", fontSize: 40 , marginBottom: 80}}>
                Login
              </Text>
              <TextInput
                placeholder={'Username'}
                onChange={this.escutarInputUsername}
                value={this.state.usernameLogin}
                style= {{height: 50, margin: 12,width: 300 , borderWidth: 1, paddingLeft: 20, paddingRight: 20}}
              />
              <TextInput
                secureTextEntry={true}
                placeholder={'Password'}
                onChange={this.escutarInputPassword}
                value={this.state.passwordLogin}
                style= {{height: 50, margin: 12,width: 300 , borderWidth: 1, paddingLeft: 20, paddingRight: 20, marginBottom:     80}}
              />

              <ButtonComp metodo={this.login} acao="Entrar" style={{paddingLeft: 20, paddingRight: 20}}/>  

              <Pressable onPress={() => this.cadastro()}>
                <Text style={{marginTop:10}}>Cadastrar</Text>
              </Pressable>

            </View> 

            <View style={(this.state.cadastro) ? styles.show : styles.hide }>
              <Cadastro toLogin={this.toLogin}/>
            </View> 
          </View>

          <View style={(this.state.isLoggedin) ? styles.show : styles.hide }>
            <Listagem />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  show: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  },
  hide: {
    display:'none',
  }
});

export default Login;