import React, {useState, useEffect} from "react";
import { Platform } from "react-native";
import { Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, View, TextInput } from "react-native";
//import { request, PERMISSIONS} from 'react-native-permissions';
//import Geolocation from "@react-native-community/geolocation";

import { ActivityIndicator } from "react-native";

import Api from "../Api";

// import { Permissions } from 'expo'
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import BarberItem from "../components/BarberItem";

import SearchIcon from '../assets/search.svg'
import MyLocationIcon from '../assets/my_location.svg'
import { useNavigation } from "@react-navigation/native";


const Home = () => {

    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [coordenadas, setCoordenadas] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    const handleLocationFinder = async () => {
        setCoordenadas(null);
        
        const {status} = await Location.requestForegroundPermissionsAsync();
       
        if(status !== 'granted'){
            console.log("PERMISSION NOT GRANTED!");
        }

        if(status == 'granted'){

            setLoading(true);
            setLocationText('');
            setList([]);

            let location = await Location.getCurrentPositionAsync({});
            setCoordenadas(location);
            getBarbers();
        }     
       
        
        //setLocation(location);
        // const location = Location.getCurrentPositionAsync();
        //console.log(location);
        //setCoordenadas(location);

        // let result = await request(
        //     Platform.OS === 'ios' ?
        //         PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        //         :
        //         PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        // );

        // if(result == 'granted'){

        //     Geolocation.getCurrentPosition((info) => {
        //         console.log(info)
        //     })
        // }
    }

    const getBarbers = async () => {
        setLoading(true);
        setList([])
        
        let res = await Api.getBarbers();
        if(res.error == ''){
            //console.log(res)
            if(res.loc){
                setLocationText(res.loc)
            }
            setList(res.data);

        }else {
            alert("Erro: "+res.error)
        }

        setLoading(false)
            
    }

    useEffect(()=> {
        getBarbers();
    }, [])

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroller}>
                <View style={styles.headerArea}>
                    <Text style={styles.headerTitle}>Encontre o seu barbeiro aqui</Text>
                    <TouchableOpacity style={styles.searchButton} onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon  width="26" height="26" fill="#FFFFFF"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.locationArea}>
                    <TextInput 
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFF"
                        style={styles.locationInput}
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                    />
                    <TouchableOpacity style={styles.locationFinder} onPress={handleLocationFinder}>
                        <MyLocationIcon width="26" height="26" fill="#FFFFFF" />
                    </TouchableOpacity>
                    
                </View>

                {loading &&
                    <ActivityIndicator style={styles.loadingIcon} size="large" color="#FFF"/>
                }
                {/* <View>
                    <Text>Coordenadas:</Text>
                    <Text>{JSON.stringify(coordenadas)}</Text>
                </View> */}
                <View stye={styles.listArea}>
                    {list.map((item,k)=> (
                        <BarberItem key={k} data={item} />
                    ))}
                </View>

            </ScrollView>
            {/* <Text>Home</Text> */}
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#63C2D1"
    },

    scroller: {
        flwx: 1,
        padding: 20,
    },

    headerArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerTitle: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: 'bold',
        width: 250
    },

    searchButton: {
        width: 26,
        height: 26
    },

    locationArea: {
        backgroundColor: '#4EADBE',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    locationInput: {
        flex: 1,
        fontSize: 16, 
        color: '#FFF'
    },
    locationFinder: {
        width: 24,
        height: 24
    },
    loadingIcon: {
        marginTop: 50
    },
    listArea: {
        marginTop: 30,
        marginBottom: 30
    }

})