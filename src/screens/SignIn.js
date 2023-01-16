import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import SignInput from "../components/SignInput";


import BarberLogo from '../assets/barber.svg'
import EmailIcon from  '../assets/email.svg'
import LockIcon  from   '../assets/lock.svg'

 function SignIn () {

    return(
        <SafeAreaView style={styles.container}>
            <BarberLogo width="100%" height="160" />

            <View style={styles.InputArea}>
                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu E-mail"
                />
                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                />
                <TouchableOpacity style={styles.CustomButtom}>
                    <Text style={styles.CustomButtonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SignMessageButton}>
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

export default SignIn;