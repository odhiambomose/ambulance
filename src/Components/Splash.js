import React from 'react'
import {Text,View ,StyleSheet, Button} from "react-native"



const Splash = () => {
  return (
    <View style={styles.container}>
      
    </View>
  )
}


const styles=StyleSheet.create({
container:{
  justifyContent:'center',
  textAlign:'center',

  backgroundColor:"maroon",
  height:"100%",
  color:"#fff",

},

intro:{
  textAlign:"center",
  fontSize:30,
  color:"#fff"
}

})

export default Splash
