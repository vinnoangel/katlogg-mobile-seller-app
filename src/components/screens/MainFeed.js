import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Dimensions, 
    TouchableOpacity ,
    StatusBar,
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
            <Image style={{ width:26, height:26, tintColor:'#ffffff' }} source={config.images.product} />
          );
          return {tabBarLabel, tabBarIcon};
      }

    render(){

        return(
            <View style={{ flex: 1, width: 100 + "%", alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar
            backgroundColor="#E53935"
            barStyle="light-content"
            />
                <View style={styles.tempNav} >
                    <TouchableOpacity
                    activeOpacity = {0.4} onPress={() => {this.onPress();}}
                >
                    <Text> KATLOGG </Text>
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
        height: 40,
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