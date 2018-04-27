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


export default class App extends Component {

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
  }

  salvarDados(){
    //ToastAndroid.show("fdsfdf",ToastAndroid.SHORT);
    var funcionarios = firebase.database().ref("funcionarios");
    //database.ref("pontuacao").remove();
    funcionarios.push().set({
      nome: "maria",
      altura: "1,55",
      peso: '50'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Button onPress={ () => this.salvarDados() } title="Salvar dados" color="#841584" accessibilityLabel="Salvar dados"/>
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
