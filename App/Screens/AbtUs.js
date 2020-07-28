import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Br} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 export default class AboutVC extends Component{
     render(){
         return(
             <SafeAreaView style = {{width:'100%', height:'100%'}}>
                 <View style = {styles.maincontainer}>
                     <ImageBackground source = {require('../Assets/bgc.jpg')}style = {styles.bck_img}>
                      <Text style = {{width:'80%', fontSize: 20, textAlign:'justify'}}>
                      Wish Children’s Day to everyone in this easy to use ,amazing and ads free app. {'\n'}{'\n'}


This app has three parts - Status, Cards and Notes.{'\n'}{'\n'}


Status - On tap of the Status button, the user will find a collection of status. On tap of any particular quotes, users can view the quotes, save and share.{'\n'}{'\n'}

Cards - On tap of cards button, the user will find a collection of cards. On tap of any particular card, users can view the card to view, save, and share.{'\n'}{'\n'}

Notes - In this part of the app, users can make notes from their end to save in gallery or share with friends and family.{'\n'}{'\n'}


Download the app and celebrate Children’s Day with fun.

                     </Text>
                     </ImageBackground>
                 </View>
             </SafeAreaView>
         )
     }
 }

 const styles =StyleSheet.create({
     maincontainer:{
         width:'100%',
         height:'100%',
         justifyContent :'center',
         alignItems:'center',
         backgroundColor:'blue'

     },
     bck_img:{
         width:'100%',
         height:'100%',
         resizeMode:'cover',
         justifyContent:'center',
         alignItems:'center'
     }
 })