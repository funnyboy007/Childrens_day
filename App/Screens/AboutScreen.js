import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, Share} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
 export default class AboutVC extends Component{

    constructor(props) {
        super(props);
        this.state = { text: '' };
        }

    onShare = async () => {
        const {text} = this.state
        try {
          const result = await Share.share({
            message:text
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {// shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
     render(){
         return(
             <SafeAreaView style = {{width:'100%', height:'100%'}}>
                 <View style = {styles.maincontainer}>
                     <ImageBackground source = {require('../Assets/addbg.jpg')}style = {styles.bck_img}>
                      <View style = {styles.addTitle}>
                      <Text style = {{fontSize:35,color:'white'}}>
                          Add a Note
                      </Text>
                      </View>
                      
                      <View style = {{width:'50%', height:'10%', justifyContent:'flex-end', alignItems:'flex-end', marginBottom:'5%', marginLeft:'35%'}}>
                        
                         <TouchableOpacity style = {{width:'60%', height:'100%',justifyContent:'center', alignItems:'center'}}
                         
                         onPress = {() => {this.onShare()}}>
                             <Image source = {require('../Assets/share.png')}></Image>
                            
                        </TouchableOpacity>
                        
                    </View>
                         <View style = {styles.txtInput}>
                             <ImageBackground source={require('../Assets/inputbg.png')} style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                      <TextInput  placeholder = 'write here'
                      placeholderTextSize = '25'
                      placeholderTextColor = "gray"
                      autoCapitalize = "none"
                       style = {{color:'gray', fontSize:25}}
                       onChangeText={(text) => this.setState({text})}
                       value={this.state.text}> 

                      </TextInput>
                      </ImageBackground>
                      </View>
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
         //justifyContent:'center',
         alignItems:'center'
     },
     txtInput:{
         width:'90%',
         height:'50%',
         backgroundColor:'#bff2da',
         textAlign:'center',
         justifyContent:'center',
         borderWidth:1,
         
     },
     addTitle:{
         width:'100%', 
         height:'10%',
         fontSize: 35, 
         alignItems:'center',
         justifyContent:'center',
         marginBottom:'10%',
         marginTop:'-10%',
         backgroundColor:'#550459'
        },
        sbtn:{
            width:'70%',
            height:'110%'
        }
 })