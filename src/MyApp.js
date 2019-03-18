import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MainFeed, Login, Profile, Camera } from './components/screens';
import { SwitchNavigator, createBottomTabNavigator } from 'react-navigation';


const Tabs = createBottomTabNavigator({
    Main: MainFeed,
    Camera: Camera,
    Profile: Profile,
  },
  {
      tabBarOptions: {
        activeTintColor: 'gray',
        inactiveTintColor: 'orange',
        tarBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        lazy: true,
        tabBarVisible: true,
      },
    }
);


//const TabBar = TabNavigator(routeConfigs, tabNavigatorConfig);

const MainStack = SwitchNavigator({
    login: Login,
    main: Tabs,
});

export default class MyApp extends Component {

    render(){
        return(
            <MainStack />

        );
    }
}
