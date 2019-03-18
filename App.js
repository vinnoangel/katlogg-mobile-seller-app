import React from 'react';
import { Text, View } from 'react-native';
import { SwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import { MainFeed, Login, Profile, Camera, SingleFeed } from 'myapp/src/components/screens';


let Tabs = createBottomTabNavigator({
  Feed: { screen: MainFeed },
  Camera: { screen: Camera },
  User: { screen: Profile },
},
{
    tabBarOptions: {
      activeTintColor: '#D2D2D2',
      inactiveTintColor: 'white',
      tarBarPosition: 'bottom',
      swipeEnabled: true,
      animationEnabled: true,
      lazy: true,
      style: {
        backgroundColor: '#FF552A',
      },
    },
  }
);

const MainStack = SwitchNavigator({
  login: Login,
  main: Tabs,
  single: SingleFeed,
});

export default class App extends React.Component {

  render(){
      return(
          <MainStack />
      );
  }
}
