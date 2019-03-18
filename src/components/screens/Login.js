import React, { Component } from 'react';
import { 
  TextInput, 
  Image, 
  View, 
  TouchableOpacity, 
  StyleSheet, 
  Platform, 
  StatusBar,
  Text,
  Button,
  CheckBox,
} from 'react-native';
import config from '../../config';

export default class Login extends Component {
  constructor()
  {
    super();

    this.state = { 
      hidePassword: true,
      check: false, 
    }
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  onPress() {
    this.props.navigation.navigate("main");
  }
  checkBoxTest() {
    this.setState({
      check: !this.state.check
    })
  }

  render()
  {
    return(
      <View style = { styles.container }>
        <StatusBar
          backgroundColor="#FA7F71"
          barStyle="light-content"
        />

        <View style={styles.cls}></View>

        <Image style={styles.imageLogo} source={config.images.katlogg_logo} />
        <Text style={{color:'#FA7F71', }}>Katlogg Seller App</Text>

        <View style={styles.cls}></View>

        <TextInput 
          style={styles.textBox} 
          underlineColorAndroid='transparent' 
          placeholder='Email' 
          placeholderTextColor='#FA7F71' 
        />

        <View style = { styles.textBoxBtnHolder }>
          <TextInput 
            underlineColorAndroid = "transparent" 
            secureTextEntry = { this.state.hidePassword } 
            style = { styles.textBox } 
            placeholder='Password' 
            placeholderTextColor='#FA7F71'
          />
          <TouchableOpacity 
            activeOpacity = { 0.8 } 
            style = { styles.visibilityBtn } 
            onPress = { this.managePasswordVisibility }>
            <Image source = { ( this.state.hidePassword ) ? config.images.hide : config.images.eye } style = { styles.btnImage } />
          </TouchableOpacity>
        </View>

        <View style = { styles.buttons }>
        <View style={{ flexDirection: 'row', }}><CheckBox value={this.state.check} onChange={()=>this.checkBoxTest()}  /><Text>Remember me</Text></View>

          <TouchableOpacity activeOpacity = {0.4} onPress={() => {this.onPress();}}>
            <Text style={{textAlign:'right'}}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

       <View style = { styles.buttons }>
        
          <TouchableOpacity style={styles.button} activeOpacity = {0.4} onPress={() => {this.onPress();}}>
            <Text style={styles.buttonText}> Create Account </Text>
          </TouchableOpacity>
        <View style={{width:20}}></View>
          <TouchableOpacity style={styles.button} activeOpacity = {0.4} onPress={() => {this.onPress();}}>
            <Text style={styles.buttonText}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
  container:
  {
    flex: 1,
    width: 100 + "%",
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#ffffff',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  button: {
    width: 160,
    backgroundColor: '#FA7F71',
    borderRadius: 15,
    marginVertical: 10,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },

  imageLogo: {
    width: 120,
    height: 120,
  },  

  textBoxBtnHolder:
  {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },

  buttons:
  {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: 100 + '%',
  },

  textBox:
  {
    fontSize: 18,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    paddingVertical: 0,
    backgroundColor: '#fff',
    borderColor: '#FA7F71',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#E53935',
    marginVertical: 10,
  },

  visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },

  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },

  cls: {
    height:40,
  },
});