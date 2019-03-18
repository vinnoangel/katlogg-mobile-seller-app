import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MainFeed, Login, Profile, Camera } from './components/screens';
import { SwitchNavigator, TabNavigator } from 'react-navigation';
import { feed, profile, camera } from './ScreenNames.js';

let routeConfigs = {
    feed: {
        screen: MainFeed,
    },
    profile: {
        screen: Profile,
    },
    camera: {
        screen: Camera,
    },
};

let tabNavigatorConfig = {
    //tabBarPosition: "bottom",
    //animationEnabled: false,
    swipeEnabled: true,
    lazy: false,
};

// const Tabs = TabNavigator({
//     feed: MainFeed,
//     profile: Profile,
//     camera: Camera
// }, tabNavigatorConfig);

const TabBar = TabNavigator(routeConfigs, tabNavigatorConfig);

const MainStack = SwitchNavigator({
    login: Login,
    main: TabBar
});

export default class MyApp extends Component {

    render(){
        return(
            
                <MainStack />
            

        );
    }
}
