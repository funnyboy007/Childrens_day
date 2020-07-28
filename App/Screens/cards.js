
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
import {DataSet1} from '../Screens/CardImg';
//import images from '../Screens/imagesBase64';
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
          url: questions,
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


    
    loadQuiz = () => {
        const {Questions} = this.state;
        this.setState(() => {
            return {
                id : DataSet1[Questions].id,
                questions: DataSet1[Questions].image,
                
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
                id : DataSet1[Questions].id,
                questions: DataSet1[Questions].image,
            }
        })
    }
}




    render() {
        const {questions, id} = this.state
        return(
            <SafeAreaView style = {{width:'100%', height:'100%'}}>
            <View style = {styles.maincontainer}>
                <ImageBackground source = {require('../Assets/bgc3.jpg')}style = {styles.bck_img}>
                 <Text style = {styles.addTitle}>
                     Cards
                 </Text>
                 <View style = {{width:'100%', height:'10%', flexDirection:'row', justifyContent:'space-between',}}>
                 
                         <TouchableOpacity style = {{width:'16%', height:'85%',justifyContent:'center', alignItems:'center',marginLeft:'5%', marginTop:'2%'}}
                         onPress = {() => {this.nextQuestionHandlerbck()}}>
                            
                            <Image source = {require('../Assets/bck.png')}></Image>
                            
                        </TouchableOpacity>
                        
                        
                         <TouchableOpacity style = {{width:'16%', height:'85%',justifyContent:'center', alignItems:'center', marginTop:'2%', marginRight:'5%'}}
                         onPress = {() => {this.nextQuestionHandlernxt()}}>
                            
                            <Image source = {require('../Assets/nxt.png')}></Image>
                            
                        </TouchableOpacity>
                        
                    </View>
                 
                    <View style = {styles.txtInput}>
                    <Image source = {questions} style= {{width:'100%', height:'100%', resizeMode :'contain'}}></Image>                        
                 </View>
                 <View style = {{width:'90%', height:'10%', justifyContent:'flex-end', alignItems:'flex-end', marginBottom:'3%', marginLeft:'35%'}}>
                        
                         <TouchableOpacity style = {{width:'40%', height:'85%',justifyContent:'center', alignItems:'center', marginRight:'50%', backgroundColor:'#55e3f2', borderRadius:40}}>
        <Text style={{color:'#022529', fontSize:25}}>{id+1}/{DataSet1.length}</Text>
                            
                        </TouchableOpacity>
                        
                    </View>
                    <Image source = {require('../Assets/chld2.png')} style = {{width:'100%', height:'21%'}}></Image>
                 
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
        //backgroundColor:'#8af2ad',
        textAlign:'center',        
    },
    addTitle:{
        width:'80%', 
        fontSize: 35, 
        //textAlign:'justify',
        textAlign:'center',
        backgroundColor:'#c3f7f4',
        marginTop:'2%'
       },
       sbtn:{
           width:'70%',
           height:'110%'
       },
       frmbg:{
           width:'100%',
           height:'100%',
           justifyContent:'center',alignItems:'center'
       }
})