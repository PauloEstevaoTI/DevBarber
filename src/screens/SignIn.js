import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, View, TouchableOpacity, Platform } from "react-native";
import { useState, useContext } from "react";
//import UserContext
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import {UserContext} from '../contexts/UserContext';

import Api from "../Api";

import SignInput from "../components/SignInput";

import BarberLogo from '../assets/barber.svg'
import EmailIcon from  '../assets/email.svg'
import LockIcon  from   '../assets/lock.svg'


 function SignIn () {
    const {dispatch: userDispatch} = useContext(UserContext)

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleMessageCLick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })
    }

    const handleSignClick = async () => {
        if(email && password){
            let json = await Api.signIn(email, password)
            if(json.token){
               
                await AsyncStorage.setItem('token', json.token)
                
                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                })

                navigation.reset({
                    routes:[{name: 'MainTab'}]
                })

            
            }else{
                alert('E-mail e ou senha errados')
            }


        }else {
            alert("Preencha os campos")
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <BarberLogo width="100%" height="160" />
               <View style={styles.InputArea}>
                    <SignInput 
                        IconSvg={EmailIcon}
                        placeholder="Digite seu E-mail"
                        value={email}
                        onChangeText={t=>setEmail(t)}
                    />
                    <SignInput 
                        IconSvg={LockIcon}
                        placeholder="Digite sua senha"
                        value={password}
                        onChangeText={t=>setPassword(t)}
                        password={true}
                    />
                    <TouchableOpacity style={styles.CustomButtom} onPress={handleSignClick}>
                        <Text style={styles.CustomButtonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.SignMessageButton} onPress={handleMessageCLick}>
                        <Text style={styles.SignMessageButtonText}>Ainda não possui uma conta?</Text>
                        <Text style={styles.SignMessageButtonTextBold}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#63C2D1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputArea: {
        padding: 40,
        width: '100%',
        // backgroundColor: '#FF0000'
    },
    CustomButtom: {
        height: 60,
        backgroundColor: "#268596",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    CustomButtonText: {
        fontSize: 18,
        color: '#FFF'
    },

    SignMessageButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20,
        width: '100%'
        },
    SignMessageButtonText: {
        fontSize: 12,
        color: '#268596'
    },
    SignMessageButtonTextBold: {
        fontSize: 12,
        color: '#268596',
        fontWeight: 'bold',
        marginLeft: 5
    },

})

export default SignIn;