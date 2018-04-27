import firebase from 'firebase';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid
} from 'react-native';

console.disableYellowBox = true;

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      pontuacao: 0
    }
  }

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCraTAEqfd3zwy9NqLddsRzHErVMuCTY9s",
      authDomain: "react-native-firebase-te-565b5.firebaseapp.com",
      databaseURL: "https://react-native-firebase-te-565b5.firebaseio.com",
      projectId: "react-native-firebase-te-565b5",
      storageBucket: "react-native-firebase-te-565b5.appspot.com",
      messagingSenderId: "189195563783"
    };
    firebase.initializeApp(config);

    //this.listarDados();
  }

  salvarDados() {
    //ToastAndroid.show("fdsfdf",ToastAndroid.SHORT);
    var funcionarios = firebase.database().ref("funcionarios");
    //database.ref("pontuacao").remove();
    funcionarios.push().set({
      nome: "maria",
      altura: "1,55",
      peso: '50'
    });
  }

  listarDados() {
    var pontuacao = firebase.database().ref("pontuacao");
    pontuacao.on('value', (snapshot) => {
      this.setState({pontuacao: snapshot.val()});
    });
  }

  cadastrarUsuario(){
    var dados = {
      email: "jean@jean.com",
      senha: "123456"
    }

    const usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(dados.email, dados.senha).catch( (error) => {
      alert(error.message);
    });
  }

  verificarUsuarioLogado(){
    const usuario = firebase.auth();

    usuario.onAuthStateChanged( (usuarioAtual) => {
      if(usuarioAtual){
        alert("Está logado");
      }
      else{
        alert("Não está logado");
      }
    });

    /*
    const usuarioAtual = usuario.currentUser();

    if(usuarioAtual){
      alert("Está logado");
    }
    else{
      alert("Não está logado");
    }
    */
  }

  logout(){
    const usuario = firebase.auth();
    usuario.signOut();
  }

  login(){
    var dados = {
      email: "jean@jean.com",
      senha: "123456"
    }

    const usuario = firebase.auth();

    usuario.signInWithEmailAndPassword(dados.email, dados.senha).catch( (error) => {
      alert(error.message);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Bem vindo ao React-Native
        </Text>
        <Text style={styles.instructions}/>
        <Button onPress={() => this.cadastrarUsuario()} title="Cadastrar Usuário" color="#841584"/>

        <Text style={styles.instructions}/>
        <Button onPress={() => this.verificarUsuarioLogado()} title="Verificar usuário logado" color="#841584"/>

        <Text style={styles.instructions}/>
        <Button onPress={() => this.logout()} title="Sair" color="#841584"/>

        <Text style={styles.instructions}/>
        <Button onPress={() => this.login()} title="Entrar" color="#841584"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
