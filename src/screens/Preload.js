import React, {useEffect, useContext} from "react";
import { ActivityIndicator, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


import {UserContext} from "../contexts/UserContext";

import Logo from '../assets/barber.svg'
import Api from "../Api";

function Preload () {

    //const {dispatch: userDispatch} = useContext(UserContext)
    const navigation = useNavigation();

    useEffect(()=> {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')
            if(token){
                //validar o token
                let res = await Api.checkToken('token');
                if(res.token){

                    // await AsyncStorage.setItem('token', res.token)
                
                    // userDispatch({
                    //     type: 'setAvatar',
                    //     payload: {
                    //         avatar: res.data.avatar
                    //     }
                    // })
    
                    // navigation.reset({
                    //     routes:[{name: 'MainTab'}]
                    // })
                    

                }else {
                    navigation.navigate('SignIn');
                }
            }else{
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, [])

    return(
        <SafeAreaView style={styles.container}>
            <Logo width="100%" height={160} />
            <ActivityIndicator style={styles.loading} size="large" color='#FFF' />
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63C2D1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        marginTop: 50
    }
})

export default Preload;