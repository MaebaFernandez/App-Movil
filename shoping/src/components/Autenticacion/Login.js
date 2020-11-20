import React, {Fragment, useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from "react-native";
import { validarCorreo } from '../utils/validaciones';
import firebase from '../utils/firebase';

export default function LoginForm(props) {
    const {cambiosForm} = props;
    const [formDato, setFormDato] = useState(valorDefecto());
    const [formError, setFormError] = useState({});
    const iniciar = () => {
        let errores = {};
        if (!formDato.correo || !formDato.contrasena) {
            if (!formDato.correo) errores.correo = true;
            if (!formDato.contrasena) errores.contrasena = true;
        } else if (!validarCorreo(formDato.correo)) {
            errores.correo = true;
        } else {
            firebase
            .auth()
            .signInWithEmailAndPassword(formDato.correo,formDato.contrasena)
            .catch((error) => {
                console.log(error);
                setFormError({
                    correo: true,
                    contrasena: true
                })
            })
        }
        setFormError(errores);
    }
    const onChange = (e, tipo) => {
        setFormDato({...formDato, [tipo]: e.nativeEvent.text});
    }
    return (
        <>
            <Text style={estilo.title}>Shopping App!</Text>
            <TextInput
                style={[estilo.textInput, formError.correo && estilo.errorEstilo]}
                placeholder="Ingrese correo" 
                placeholderTextColor="#969696"
                onChange={(e) => onChange(e, "correo")}/>
            <TextInput
                style={[estilo.textInput, formError.contrasena && estilo.errorEstilo]}
                placeholder="Ingrese contrasena" 
                placeholderTextColor="#969696"
                secureTextEntry={true} 
                onChange={(e) => onChange(e, "contrasena")}/>
            <Button title = "Iniciar Sesion" onPress={iniciar}/>

            <View style={estilo.irRegistro}>
                <TouchableOpacity>
                    <Text style={estilo.link} onPress={cambiosForm}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

function valorDefecto() {
    return {
        correo: '',
        contrasena: ''
    }
}

const estilo = StyleSheet.create({
    title: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 20
    },
    textInput: {
        height: 40,
        color: "#fff",
        width: "80%",
        marginBottom: 25,
        backgroundColor: "#1e3040",
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 15,
        borderWidth: 1,
        borderColor:"#1e3040"
    },
    irRegistro: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 50
    },
    link:{
        color: '#fff',
        fontSize: 15,
        marginTop: 40
    },
    errorEstilo: {
        borderColor: "#f05545"
    }
});