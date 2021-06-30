import React, { useState } from 'react'

import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,StatusBar,} from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'

export default class Screen extends React.Component{
    
 render(){
    

     return(
         <View style={styles.container}>
             <StatusBar barStyle="dark-content" backgroundColor="#ffff80" />
         <SafeAreaView style={{flex:1}}>
             <TouchableOpacity style={{alignItems:"flex-end",margin:16}} onPress={this.props.navigation.openDrawer}>
                 <FontAwesome5 name="bars" size={24} color="#000000"></FontAwesome5>

             </TouchableOpacity>
             
             <View style={{flex:1,alignItems:"center", justifyContent:"center"}}>
                 <Text style={styles.text}>
                     {this.props.name} Sceen
                 </Text>

             </View>
         </SafeAreaView>


         </View>
     )
 }

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    text:{
        color:'#000000',
        fontSize:20,
        
    }
})