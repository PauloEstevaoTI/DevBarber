import react from "react";
import { StyleSheet, View, Text } from "react-native";


import StarHalf from '../assets/star_half.svg'
import StarEmpty from '../assets/star_empty.svg'

import StarFull from '../assets/star.svg'

const Stars = ({stars, showNumber}) => {

    let s = [0, 0, 0, 0, 0];
    let floor = Math.floor(stars);
    let left = stars - floor;

    for(var i = 0; i < floor; i++){
        s[i] = 2
    }

    if(left >  0){
        s[i] = 1
    }

    return(
        <View style={styles.starArea}>
            
            {s.map((i, k)=> (
                <View key={k}> 
                    
                    {i === 0 && <StarEmpty width="18" heigth="18" fill="#FF9200"/> }
                    {i === 1 && <StarHalf width="18" heigth="18" fill="#FF9200"/> }
                    {i === 2 && <StarFull width="18" heigth="18" fill="#FF9200"/> }
                </View>
            ))}
              {showNumber &&
                    <Text style={styles.starText}>{stars}</Text>
                }
        </View>
    )
}

export default Stars;

const styles = StyleSheet.create({
    starArea: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    starText: {
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 5,
        color: '#737373'
    }

})