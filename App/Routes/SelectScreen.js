// In App.js in a new project

import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

class SelectCategory extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

export default SelectCategory;

const styles = StyleSheet.create({
  buttonstyle: {
    margin: '1%',
    width: '70%',
    height: '10%',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#11f788',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.9,
    //marginRight: '2%'
  },
  backImg: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.9,
  },
  Button_text: {
    color: 'black',
    fontSize: 30,
    shadowOffset: {width: 2, height: 2},
    fontWeight: 'bold',
    shadowOpacity: 0.9,
    shadowColor: 'white',
  },

  icon_img: {
    width: '45%',
    height: '40%',
  },
  aboutBtn: {
    width: 200,
    height: '35%',
    marginTop: '27%',
  },
});
