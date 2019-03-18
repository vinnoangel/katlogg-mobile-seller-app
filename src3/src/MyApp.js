import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { MainFeed, Login, Profile, Camera } from './components/screens';
import { SwitchNavigator, TabNavigator } from 'react-navigation';
import { feed, profile, camera } from './ScreenNames.js';

const Tabs = TabNavigator({
    feed: {
        screen: MainFeed,
        navigationOptions: {
            tabBarLabel: 'Feed',
        },
    },
    profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Me',
        },
    },
    camera: {
        screen: Camera,
        navigationOptions: {
            tabBarLabel: 'Camera',
        },
    },
    
},
    
{
    tabBarOptions:{
        //tabBarComponent: TabBarBottom,
        labelStyle: {
            fontSize: 12,
        },
        tabStyle: {
            width: 100,
        },
        style: {
            flex: 1,
            backgroundColor: 'blue',
        },
        tabBarPosition: 'bottom',
        //tabBarComponent: TabBarBottom,
        lazy: false,
        swipeEnabled: false,
        animationEnabled: false,
    },
    initialLayout: {
        height: 0,
        width: Dimensions.get('window').width,
    }
});

const MainStack = SwitchNavigator({
    login: Login,
    main: Tabs
});

export default class MyApp extends Component {
    render(){
        return(
            
                <MainStack />
            

        );
    }
}
