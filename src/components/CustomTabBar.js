import React, {useContext} from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import { UserContext } from '../contexts/UserContext'

import HomeIcon from '../assets/home.svg'
import SearchIcon from '../assets/search.svg'
import TodayIcon from '../assets/today.svg'
import FavoriteIcon from '../assets/favorite.svg'
import AccountIcon from '../assets/account.svg'


const CustomTabBar = ({state, navigation}) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    const {state:user} = useContext(UserContext)
   

    return(
        <View style={styles.tabArea}>
            <TouchableOpacity style={styles.tabItem} onPress={()=>goTo('Home')}>
                <HomeIcon style={{opacity: state.index === 0 ? 1 : 0.5}} width="24" height="24" fill="#FFFFFF"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={()=>goTo('Search')}>
                <SearchIcon style={{opacity: state.index === 1 ? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItemCenter} onPress={()=>goTo('Appointments')}>
                <TodayIcon width="32" height="32"  fill="#4EADBE"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}  onPress={()=>goTo('Favorites')}>
                <FavoriteIcon style={{opacity: state.index === 3 ? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={()=>goTo('Profile')}>
            {/* <AccountIcon style={{opacity: state.index === 4 ? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" /> */}
                {user.avatar != '' ?
                  <Image source={{uri: user.avatar}} style={styles.avatarIcon}/> 
                  :
                  <AccountIcon style={{opacity: state.index === 4 ? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
                }
                
            </TouchableOpacity>
        </View>
    )
}

export default CustomTabBar;

const styles = StyleSheet.create({
    tabArea: {
        height: 60,
        backgroundColor: '#4EADBE',
        flexDirection: 'row'
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabItemCenter: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 3,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        borderColor: '#4EADBE',
        marginTop: -20
    },
    avatarIcon: {
        width: 24,
        height: 24,
        borderWidth: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    }


})