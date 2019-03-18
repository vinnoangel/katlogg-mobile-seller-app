import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Dimensions, 
    TouchableOpacity 
} from 'react-native';
import config from './config';

class MyApp extends Component {

    constructor() {
        super();
        this.state = {
            liked: false,
            screenWidth: Dimensions.get("window").width
        };
    }

    likedToggled() {
        this.setState ({
            liked: !this.state.liked
        });
    }

    render(){

        const imageHeight = Math.floor(this.state.screenWidth * 0.9);
        //alert(imageHeight);
        const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg';// + '=s' + imageHeight; 
        const heartIconColor = (this.state.liked ? "rgb(252,61,57)" : null);
        return(
            <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
                <View style={styles.tempNav} >
                    <Text>Instagram</Text>
                </View>
            
            <View  style={{ flex: 1, width: 100 + "%" }}>
                
                <View style={styles.userBar} >

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image 
                            style={ styles.userPic}
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
                            }}
                        />
                        <Text style={styles.userText}>vinnoangel</Text>
                    </View>

                    <View>
                        <Text style={{ fontWeight: "bold", fontSize: 36, alignItems: "center" }}>...</Text>
                    </View>

                </View>
                
                <Image 
                    style={{ width:this.state.screenWidth, height: imageHeight  }}
                    source={{
                        uri: imageUrl
                    }}
                />
                

                <View style={styles.iconBar}>
                    <TouchableOpacity activeOpacity = {0.4} onPress={() => { this.likedToggled(); }}>
                    <Image style={[styles.icon, {height: 45, width: 45, tintColor: heartIconColor}]} source={config.images.heartIcon} />
                    </TouchableOpacity>
                    <Image style={[styles.icon, {height: 36, width: 36}]} source={config.images.chatIcon} />
                    <Image resizeMode = "stretch" style={[styles.icon, {height: 40, width: 40}]} source={config.images.arrowIcon} />
                </View>

                <View style={styles.iconBar}>
                    <Image style={[styles.icon, {height: 20, width: 20}]} source={config.images.heartIcon} />
                    <Text>130 Likes</Text>
                </View>

            </View>
</View>
        );
    }
}

const styles = StyleSheet.create({
    
    tempNav: {
        width: 100 + "%",
        height: 75,
        marginTop: 20,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairLineWidth,
        justifyContent: "center",
        alignItems: "center"
    },
    
    userBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },

    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },

    userText: {
        paddingLeft: 5
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairLineWidth,
        borderBottomWidth: StyleSheet.hairLineWidth,
        flexDirection: "row",
        alignItems: "center",


    },

    icon: {
        marginHorizontal: 5,
    },

});

export default MyApp;