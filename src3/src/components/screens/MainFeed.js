import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Dimensions, 
    TouchableOpacity 
} from 'react-native';
import config from '../../config';
import { PostFeed } from '../container';

class MainFeed extends Component {

    onPress() {
        this.props.navigation.navigate("login");
      }

      static navigationOptions = ({ navigation }) => {
          let tabBarLabel = "MainFeed";
          let tabBarIcon = () => (
            <Image style={{ width:26, height:26, tintColor:'#e97600' }} source={config.images.product} />
          );
          return {tabBarLabel, tabBarIcon};
      }

    render(){

        return(
            <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
                <View style={styles.tempNav} >
                    <TouchableOpacity
                    activeOpacity = {0.4} onPress={() => {this.onPress();}}
                >
                    <Text> Instagram </Text>
                </TouchableOpacity>
                </View>
                
                <View style={styles.postContents} >
                    <PostFeed />
                </View>
                
                
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    tempNav: {
        width: 100 + "%",
        height: 55,
        backgroundColor: "#FF552A",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairLineWidth,
        justifyContent: "center",
        alignItems: "center"
    },
    
    postContents: {
        width: 100 + "%",
        height: 500
    },

});

export default MainFeed;