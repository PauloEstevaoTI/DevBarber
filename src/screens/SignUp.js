import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserContext } from "../contexts/UserContext";

import SignInput from "../components/SignInput";

import Api from "../Api";

import BarberLogo from '../assets/barber.svg'
import EmailIcon from  '../assets/email.svg'
import LockIcon  from   '../assets/lock.svg'
import PersonIcon  from   '../assets/person.svg'

 function SignUp () {

    const {dispatch: userDispatch} = useContext(UserContext)


    const navigation = useNavigation();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleMessageCLick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }

    const handleSignClick = async () => {

        //console.log("name "+ name + " password " +password+ " email "+email)

        if(name != '' && email != "" && password != ""){
            
            let res = await Api.signUp(name, email, password)
            if(res.token){
                
                await AsyncStorage.setItem('token', res.token)
                
                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: res.data.avatar
                    }
                })

                navigation.reset({
                    routes:[{name: 'MainTab'}]
                })


            }else{
                alert("Erro: " + res.error)
            }
        

        }else{
            alert("Preencha os campos")
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <BarberLogo width="100%" height="160" />

            <View style={styles.InputArea}>
                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={name}
                    onChangeText={t=>setName(t)}
                />
                <SignInput 
                    IconSvg={LockIcon}
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
                    <Text style={styles.CustomButtonText}>CASTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SignMessageButton} onPress={handleMessageCLick}>
                    <Text style={styles.SignMessageButtonText}>Já possui uma conta?</Text>
                    <Text style={styles.SignMessageButtonTextBold}>Faça o Login</Text>
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
        marginBottom: 20
    },
    SignMessageButtonText: {
        fontSize: 16,
        color: '#268596'
    },
    SignMessageButtonTextBold: {
        fontSize: 16,
        color: '#268596',
        fontWeight: 'bold',
        marginLeft: 5
    },

})

export default SignUp;