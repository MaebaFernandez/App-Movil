import React, {useState, useEffect}from 'react';
import {Button, StyleSheet, Text , View} from 'react-native';
import firebase from './src/utils/firebase';
import Auth from './src/components/Autenticacion/Auth';
import Menu from './src/components/Menu';
import 'firebase/auth';

export default function App() {
  const [usuario, setUsuario] = useState(false);

  useEffect(() => {
      firebase.auth().onAuthStateChanged(response =>{
        console.log("usuario loggueado", response);
        setUsuario(response);
      })
  }, [])
  return (
    <>
      <View style = {estilo.fondo}>
        { usuario ? <Menu/> :  <Auth/> }
      </View>
    </>
  );
}
const estilo = StyleSheet.create({
  fondo:{
    backgroundColor: "#fff",
    height: "100%"
  }
})
