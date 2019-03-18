import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import config from '../../config';

class Camera extends Component {

  onPress() {
    this.props.navigation.navigate("mainFeed");
  }

  static navigationOptions = ({ navigation }) => {
    let tabBarLabel = "Camera";
    let tabBarIcon = () => (
      <Image style={{ width:26, height:26, tintColor:'#ffffff' }} source={config.images.screenshot} />
    );
    return {tabBarLabel, tabBarIcon};
 }

 render() {
   return (
     <View style={styles.container}>
       <TouchableOpacity
         style={styles.button}
         activeOpacity = {0.4} onPress={() => {this.onPress();}}
       >
         <Text> Future Camera Page will be here </Text>
       </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF552A',
    padding: 10,
    height: 40
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})

export default Camera;
