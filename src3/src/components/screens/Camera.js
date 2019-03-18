import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import config from '../../config';

class Camera extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress() {
    this.props.navigation.navigate("mainFeed");
  }

  static navigationOptions = ({ navigation }) => {
    let tabBarLabel = "Camera";
    let tabBarIcon = () => (
      <Image style={{ width:26, height:26, tintColor:'#e97600' }} source={config.images.screenshot} />
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
         <Text> Future Camera Page </Text>
       </TouchableOpacity>

       {/* <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop:100
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF7E05',
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
