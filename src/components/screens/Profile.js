import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  View,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import config from '../../config';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      dataSource: null,
    }
  }

  componentDidMount(){

    return fetch('http://www.i-monitors.com/katlogg/engine/mobile/actions/test-news.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading:false,
          dataSource: responseJson.news,
        });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  onPress() {
    this.props.navigation.navigate("mainFeed");
  }

  static navigationOptions = ({ navigation }) => {
    let tabBarLabel = "User";
    let tabBarIcon = () => (
      <Image style={{ width:26, height:26, tintColor:'#ffffff' }} source={config.images.user} />
    );
    return {tabBarLabel, tabBarIcon};
  }

  _renderItem = ({ item }) => {
    return (
      <View style={{flex:1, flexDirection: 'row' }}>
        <StatusBar
          backgroundColor="#E53935"
          barStyle="light-content"
        />
        <Image 
        style={{ width:80, height:80 }} 
        source={{ uri: item.store_image_url}} />
        <View style={{flex:1, justifyContent: 'center', marginLeft: 5}}>
          <Text style={{fontSize:18, color: 'green', marginBottom: 5}}>{item.store}</Text>
          <Text style={{fontSize: 16, color:'black'}}>{item.news}</Text>
        </View>
      </View>
    )

  }

  _renderSeperator = () => {
    return(
      <View style={{ height:1, width:100 + '%', backgroundColor:'black'}}></View>
    )
  }


 render() {
  if(this.state.isLoading) {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" color="#330066" animating />
      </View>
    );

  } else {
   
    return (

      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this._renderSeperator}
        />
      </View>
    );
  }
    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
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

export default Profile;



