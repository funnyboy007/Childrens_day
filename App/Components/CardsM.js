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
                <ImageBackground source = {require('../Assets/bgc2.png')} style = {Styles.bgImg}>
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
                     <TouchableOpacity style = {Styles.btnStyles2} onPress = {() => this.props.navigation.navigate('More_Cards')}>
                     <Image source = {require('../Assets/more.png')}></Image>
                     </TouchableOpacity>
                     
                 </View>
                 <Image source = {require('../Assets/chld1.png')} style = {{width:'100%', height:'35%',marginTop:'10%'}}></Image>
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
        //marginTop:'35%',
        marginBottom:'3%'
    },
    btnContainer:{
        width:'95%',
        height:'40%',
        //backgroundColor:'green',
        //justifyContent:'center',
        alignItems:'center',
       // backgroundColor:'blue'
    },
    
    btnStyles2 :{
        width:'16%',
        height:'20%',
        //backgroundColor:'red',
        marginTop:'2%',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'60%',
        shadowOffset:{width:5, height:5},
        shadowColor:'black',
        shadowOpacity:0.7

    },
    appText:{
        color:'#093c8f',
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
        alignItems:'center',
        flexDirection:'row'
    }
    
})