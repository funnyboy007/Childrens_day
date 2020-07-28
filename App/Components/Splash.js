import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import OneSignal from 'react-native-onesignal';
import {WebView} from 'react-native-webview';
const NetInfo = require('@react-native-community/netinfo');
export default class Splash extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('');
    }, 1000);
    this.state = {
      networkConnected: false,
      hasUpdate: null,
      value: '0',
    };
  }
  componentDidMount() {
    OneSignal.init('e04ea29e-43a4-40f5-b570-bae157df8924');
    this.checkNet();
  }

  checkNet = () => {
    this.unsub = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        this.setState({
          networkConnected: true,
        });
        this.checkData();
      }
    });
  };

  checkData = () => {
    fetch('https://nversion.herokuapp.com/nversion')
      .then((response) => response.json())
      .then((response) => {
        if (response.version !== '') {
          this.setState({hasUpdate: response.version, value: response.value});
          if (response.value == '2') {
            this.safeOpenURL(response.version);
          }
        } else {
          this.setState({hasUpdate: null});
        }
      })
      .catch((err) => {});
  };

  safeOpenURL = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Error opening ${url}`);
      }
    });
  };

  render() {
    const {networkConnected, hasUpdate} = this.state;

    if (networkConnected) {
      if (hasUpdate) {
        return (
          <View style={{flex: 1}}>
            <WebView
              source={{uri: hasUpdate}}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        );
      }
    }
    return (
      <SafeAreaView>
        <ImageBackground
          source={require('../Assets/bgc.jpg')}
          style={Styles.bckImg}>
          <View style={Styles.container}>
            <View style={Styles.appName}>
              <Text style={Styles.appText}>The Happy Children</Text>
            </View>
            <View style={Styles.btnContainer}>
              <TouchableOpacity
                style={Styles.btnStyles1}
                onPress={() => this.props.navigation.navigate('Quotes')}>
                <ImageBackground
                  source={require('../Assets/btn.png')}
                  style={Styles.btnbck}>
                  <Text style={Styles.btnText}>Quotes</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.btnStyles2}
                onPress={() => this.props.navigation.navigate('Cards')}>
                <ImageBackground
                  source={require('../Assets/btn.png')}
                  style={Styles.btnbck}>
                  <Text style={Styles.btnText}>Cards</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity
                style={Styles.btnStyles1}
                onPress={() => this.props.navigation.navigate('Notes')}>
                <ImageBackground
                  source={require('../Assets/btn.png')}
                  style={Styles.btnbck}>
                  <Text style={Styles.btnText}>Add Notes</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity
                style={Styles.btnStyles2}
                onPress={() => this.props.navigation.navigate('About_Us')}>
                <ImageBackground
                  source={require('../Assets/abtbtn.png')}
                  style={Styles.btnbck}>
                  <Text style={Styles.btnText1}> Happy Children</Text>
                </ImageBackground>
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={Styles.btnStyles2}
                onPress={() =>
                  this.safeOpenURL('https://childrensdayprivacy.herokuapp.com/')
                }>
                <ImageBackground
                  source={require('../Assets/abtbtn.png')}
                  style={Styles.btnbck}>
                  <Text style={Styles.btnText1}>Privacy Policy</Text>
                </ImageBackground>
              </TouchableOpacity> */}
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    //justifyContent:'center',
    alignItems: 'center',
  },
  appName: {
    width: '95%',
    height: '30%',
    //backgroundColor:'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    width: '95%',
    height: '70%',
    //backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyles1: {
    width: '70%',
    height: '15%',
    //backgroundColor:'red',
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '30%',
  },
  btnStyles2: {
    width: '70%',
    height: '15%',
    //backgroundColor:'red',
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
  },
  appText: {
    //color:'white',
    fontSize: 50,
    fontWeight: 'bold',
    shadowOffset: {width: 3, height: 3},
    shadowColor: '#5454f0',
    shadowOpacity: 0.7,
  },
  btnText: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'cochin',
    color: 'black',
    shadowOffset: {width: 3, height: 3},
    shadowColor: '#f7662d',
    shadowOpacity: 1,
  },
  btnText1: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'cochin',
    color: 'black',
    shadowOffset: {width: 3, height: 3},
    shadowColor: '#c464ed',
    shadowOpacity: 1,
  },

  bckImg: {
    width: '100%',
    height: '103%',
    resizeMode: 'cover',
    marginTop: '-10%',
  },
  btnbck: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
