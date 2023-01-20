import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/CustomTabBar";

import Home from "../screens/Home";
import Appointments from "../screens/Appointments";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Favorites from "../screens/Favorites";


const Tab = createBottomTabNavigator();

const MainTab = () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
)

export default MainTab;