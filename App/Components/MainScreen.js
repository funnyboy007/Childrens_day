import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, SafeAreaView}  from 'react-native';

export default class MainScreen extends Component {

    constructor(props){
        super(props);
       setTimeout(() =>
        {
            this.props.navigation.navigate('');
        }, 1000); 
    }    
    render(){
        return(
            <SafeAreaView>
                <ImageBackground source = {require('../Assets/bgc1.jpg')} style = {Styles.bgImg}>
                <View style = {Styles.container}>
                <View style = {Styles.TextContainer}>
                    <Text style={ Styles.appText}>Children's Day Special</Text>
                 </View>
                 <View  style = {Styles.btnContainer}>
                     <TouchableOpacity style = {Styles.btnStyles1} onPress = {() => this.props.navigation.navigate('')}>
                         <ImageBackground source = {require('../Assets/quotesbg.png')} style = {Styles.btnImg}>
        <Text style = {Styles.btnText}>Children must be taught how to think, not what to think  Happy children's {'\n'} Day</Text>
                         </ImageBackground>
                     </TouchableOpacity>
                     <TouchableOpacity style = {Styles.btnStyles2} onPress = {() => this.props.navigation.navigate('Details')}>
                     <ImageBackground source = {require('../Assets/rectbtn.jpg')} style = {Styles.btnImg}>
                         <Text style = {{fontSize:25, color:'white'}}>More....</Text>
                         </ImageBackground>
                     </TouchableOpacity>
                     
                 </View>
                </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const Styles = StyleSheet.create({
    container :{
        width:'100%',
        height:'100%',
        //justifyContent:'center',
        alignItems:'center'
    },
    TextContainer:{
        width:'95%',
        height:'20%',
        //backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'35%',
        marginBottom:'10%'
    },
    btnContainer:{
        width:'95%',
        height:'40%',
        //backgroundColor:'green',
        //justifyContent:'center',
        alignItems:'center',
       // backgroundColor:'blue'
    },
    btnStyles1 :{
        width:'95%',
        height:'80%',
        //backgroundColor:'red',
        //margin:'2%',
        justifyContent:'center',
        alignItems:'center',
        //marginRight:'20%',
        shadowOffset:{width:5, height:5},
        shadowColor:'black',
        shadowOpacity:0.7
    },
    btnStyles2 :{
        width:'80%',
        height:'15%',
        //backgroundColor:'red',
        margin:'5%',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'30%',
        shadowOffset:{width:5, height:5},
        shadowColor:'black',
        shadowOpacity:0.7

    },
    appText:{
        color:'white',
        fontSize:45,
        fontWeight:'bold',
        shadowOffset:{width:3, height:3},
        shadowColor:'#d61a39',
        shadowOpacity:0.7,
        textAlign:'center',
        
    },
    btnText:{
        fontSize:25,
        fontWeight:'bold',
        color:'#2c3036',
        shadowOffset:{width:3, height:3},
        shadowColor:'#2f36ed',
        shadowOpacity:0.7,
        width:'65%',
        marginLeft:'40%'
        
    },
    bgImg:{
        width:'100%',
        height:'100%',
        resizeMode:'cover'
    },
    btnImg:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center'
    }
    
})