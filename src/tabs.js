import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { MainFeed, Login, Profile, Camera } from './components/screens';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class CameraScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 100 + '%', height: 100 }}>
        <Text>Camera!</Text>
      </View>
    );
  }
}

let Tabs = createBottomTabNavigator({
  Feed: MainFeed,
  Camera: Camera,
  Profile: Profile,
},
{
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      tarBarPosition: 'bottom',
    },
  }
);

export default Tabs;