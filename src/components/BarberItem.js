import React from "react";

import { TouchableOpacity, Image, Text, View, StyleSheet } from "react-native";


const BarberItem = ({data}) => {
    return(
        <TouchableOpacity  style={styles.area}>
            <Image source={{uri:data.avatar}} style={styles.avatar} />
            <View style={styles.infoArea}>
                <Text style={styles.userName}>{data.name}</Text>
                
                <View style={styles.seeProfileButton}>
                    <Text style={styles.seeProfileButtonText}>Ver perfil</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    area: {
        marginTop: 20,
        backgroundColor: '#FFF',
        marginBottom: 20,
        padding: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row'
    },
    avatar: {
        width: 88,
        height: 88,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    infoArea: {
        marginLeft: 20,
        justifyContent: 'space-between'
    },
    userName: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    seeProfileButton: {
        width: 100,
        height: 26,
        borderWidth: 1,
        borderColor: '#4EADBE',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    seeProfileButtonText: {
        fontSize: 13,
        color: '#268596'
    }
})

export default BarberItem;