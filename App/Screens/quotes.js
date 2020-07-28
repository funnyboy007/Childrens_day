
import React, {Component} from 'react';
import {Text, 
    View, 
    StyleSheet, 
    SafeAreaView,
    Image,
    ImageBackground,
    Button,
    TouchableOpacity,
    Share
} from 'react-native';
import {DataSet1} from '../Screens/DataSet1';

import { Assets } from 'react-navigation-stack';
//import LevelVC from './LevelVC'
//import { DataSet4 } from './DataSet4';
class LevelFirst extends Component {

    state = {
        Questions : 0,
        
    }

    /*    --------------Share Image--------------------------*/

     shareSingleImage = async () => {
        const shareOptions = {
          title: 'Share file',
          url: Assets.image1,
          failOnCancel: false,
        };
    
        try {
          const ShareResponse = await Share.open(shareOptions);
          setResult(JSON.stringify(ShareResponse, null, 2));
        } catch (error) {
          console.log('Error =>', error);
          setResult('error: '.concat(getErrorString(error)));
        }
      };

      /*-----------xxxx--------------------*/


    onShare = async () => {
        const {Questions} = this.state
        try {
          const result = await Share.share({
            message:DataSet1[Questions].question,
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

    loadQuiz = () => {
        const {Questions} = this.state;
        this.setState(() => {
            return {
                questions: DataSet1[Questions].question,
                
            }
        })
    }

    componentDidMount (){
        this.loadQuiz ();
    }

    nextQuestionHandlernxt = () => {
        const {Questions}= this.state
        if (this.state.Questions <= DataSet1.length-2){
        this.setState ({
            Questions: this.state.Questions + 1
        })
    }
    }

    nextQuestionHandlerbck = () => {
        const {Questions}= this.state
        if (this.state.Questions >= 1){
        this.setState ({
            Questions: this.state.Questions -1
        })
    }
    else {
        this.props.navigation.navigate('Category')
    }
    }


componentDidUpdate (prevProps, prevState) {
    const {Questions} = this.state;
    if (this .state.Questions !== prevState.Questions){
        this.setState (() => {
            return {
                questions: DataSet1[Questions].question,
            }
        })
    }
}




    render() {
        const {questions} = this.state
        return(
            <SafeAreaView style = {{width:'100%', height:'100%'}}>
            <View style = {styles.maincontainer}>
                <ImageBackground source = {require('../Assets/bgc3.jpg')}style = {styles.bck_img}>
                 <Text style = {styles.addTitle}>
                     Quotes
                 </Text>
                 <View style = {{width:'100%', height:'10%', flexDirection:'row', justifyContent:'space-between', marginBottom:'2%'}}>
                 
                         <TouchableOpacity style = {{width:'16%', height:'85%',justifyContent:'center', alignItems:'center', marginTop:'2%', marginLeft:'5%'}}
                         onPress = {() => {this.nextQuestionHandlerbck()}}>
                            
                            <Image source = {require('../Assets/bck.png')}></Image>
                            
                        </TouchableOpacity>
                        
                        
                         <TouchableOpacity style = {{width:'16%', height:'85%',justifyContent:'center', alignItems:'center',marginTop:'2%', marginRight:'5%'}}
                         onPress = {() => {this.nextQuestionHandlernxt()}}>
                            
                            <Image source = {require('../Assets/nxt.png')}></Image>
                            
                        </TouchableOpacity>
                        
                    </View>
                 
                    <View style = {styles.txtInput}>
                        <ImageBackground source = {require('../Assets/qframe.png')} style = {styles.frmbg}>
                        <Text style = {{ fontSize:25, textAlign:'justify', width:'80%', color:'black', fontWeight:'bold', }}>{questions}</Text>

                        </ImageBackground>
                        
                 </View>
                 <View style = {{width:'90%', height:'10%', justifyContent:'flex-end', alignItems:'flex-end', marginBottom:'2%', marginLeft:'35%'}}>
                        
                         <TouchableOpacity style = {{width:'16%', height:'85%',justifyContent:'center', alignItems:'center', marginRight:'20%',}}
                         
                         onPress = {() => {this.onShare()}}>
                             <Image source = {require('../Assets/share.png')}></Image>
                            
                        </TouchableOpacity>
                        
                    </View>
                 <Image source = {require('../Assets/chld.png')} style = {{width:'100%', height:'21%'}}></Image>
                </ImageBackground>
            </View>

        </SafeAreaView>
        )
    }
}

export default LevelFirst;




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
        width:'95%',
        height:'50%',
        backgroundColor:'#8af2ad',
        textAlign:'center',
        //justifyContent:'center',
        //borderWidth:2,
        //marginBottom:'2%',
       // borderRadius:20
        
    },
    addTitle:{
        width:'80%', 
        fontSize: 35, 
        //textAlign:'justify',
        textAlign:'center',
        //marginBottom:'3%',
        backgroundColor:'#c3f7f4',
        marginTop:'2%'
       },
       
       frmbg:{
           width:'100%',
           height:'100%',
           justifyContent:'center',alignItems:'center'
       }
})