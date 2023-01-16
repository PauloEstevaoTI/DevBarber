import React, {useEffect} from "react";
import { ActivityIndicator, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import Logo from '../assets/barber.svg'

function Preload () {

    const navigation = useNavigation();

    useEffect(()=> {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')
            if(token){
                //validar o token
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