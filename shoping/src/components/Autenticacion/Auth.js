import React, { useState } from 'react';
import {Image, View, StyleSheet} from 'react-native';
import LoginForm from './Login';
import RegistroForm from './Register';

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const cambiosForm = () => {
        setIsLogin(!isLogin);
    }
    return (
        <>
            <View style={estilo.vista}>
                <Image style={estilo.logo} source={require('../../assets/img/logo.jpg')}/>
                {isLogin ? <LoginForm cambiosForm={cambiosForm}/> : <RegistroForm cambiosForm={cambiosForm}/>}
            </View>
        </>
    );
}

const estilo = StyleSheet.create({
    vista: {
        flex: 1,
        alignItems: "center"
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: '15%',
        marginBottom: '15%'
    }
})