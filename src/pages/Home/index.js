import React, { useState } from 'react'

import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

import  Clipboard from 'expo-clipboard'

import Slider from '@react-native-community/slider';

import Logo from '../../assets/logo.png'

let charset = 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789*&%$#@!'


export default function Home() {

    const [password, setPassword] = useState('');
    const [ size, setSize] = useState(10)

    function generatePass(){
        
        let pass = ''
        for(let i = 0, n = charset.length; i < size; i++){
            pass += charset.charAt(Math.floor(Math.random() * n))
        }

        setPassword(pass)
    }

    function copyPass(){
        Clipboard.setString(password)

        alert('Senha copiada com sucesso!')
    }

    return(
        <View style={ styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text style={ styles.title}>{size} Caracteres </Text>
            <View style={ styles.area}>
                <Slider
                    style={{height: 50}}
                    minimumValue={5}
                    maximumValue={15}
                    minimumTrackTintColor="#FF3D3D"
                    maximumTrackTintColor="#000"
                    value={size}
                    onValueChange={(valor) => setSize(valor.toFixed(0))}
                />
            </View>

            <TouchableOpacity style={ styles.button } onPress={generatePass}>
                <Text style={ styles.buttonText }>Gerar Senha</Text>
            </TouchableOpacity>
            {password !== '' && (
                <View style={styles.area}   >
                    <Text style={styles.password} onLongPress={copyPass} >{password}</Text>
                </View>
            )}
            
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F3FF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
        marginBottom: 60,
    },
    area:{
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 7,
    },

    title:{
      fontSize: 30,
      fontWeight: 'bold', 
    },

    button:{
        backgroundColor: '#ffa200',
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginBottom: 25,
    },

    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },

    password:{
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
    }
  });