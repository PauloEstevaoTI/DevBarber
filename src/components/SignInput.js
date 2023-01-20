import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";




export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return(
        <View style={styles.InputArea}>
            <IconSvg width="24" height="24"  fill="#268596"/>
            <TextInput
                style={styles.Input} 
                placeholder={placeholder}
                placeholderTextColor= "#268596"
                value={value}
                onChangeText = {onChangeText}
                secureTextEntry={password}
            />
        </View>
    );
}

const styles = StyleSheet.create( {
    InputArea: {
        width: '100%',
        height: 60,
        backgroundColor: '#83D6E3',
        flexDirection: 'row',
        borderRadius: 30,
        paddingLeft: 15,
        alignItems: 'center',
        marginBottom: 15
    },
    Input: {
        flex: 1,
        fontSize: 16,
        color: "#268596",
        marginLeft: 10
    }
})