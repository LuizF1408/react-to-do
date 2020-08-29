import React from 'react';
import Button from '../components/Button'
import Input from '../components/TextInput'
import ScreenTitle from '../components/ScreenTitle'
const LoginScreen = ({history}) => {
    return (
        <>
            <ScreenTitle children ="Login"/>
            <Input placeholder="seu@email.com.br" onChangeText={(text)=> console.log("Texto",text)}/>
            <Button onPress={()=> history.push('/')} children="Entrar"></Button>
            <Button onPress={()=> history.push('/signup') } children='Cadastrar'></Button>
        </>
    )
};
export default LoginScreen;