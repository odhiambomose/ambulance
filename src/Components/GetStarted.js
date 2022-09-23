import React from 'react'
import { View,Text,StyleSheet,Image,Pressable } from 'react-native'
const GetStarted=()=> {
  return (
    <View style={styles.bgStarted}>
      <View style={styles.top} >

        <View style={styles.GetStarted}>

        <Image
        style={styles.started}
        source={require('../../assets/ambulance2.png')}
      />
        </View>

        <View style={styles.btnStarted}>

        <Pressable style={styles.button}> 
  <Text style={styles.text1}>Get started</Text>
</Pressable>

        </View>
        </View>
      
    </View>
  )
}

const styles=StyleSheet.create({

started:{
    width: 200,
    height: 300,
},

GetStarted:{
  
  justifyContent:"center",
  alignItems:"center"
},
bgStarted:{
  backgroundColor:"maroon",
  height:"100%",
},
btnStarted:{

justifyContent:"center",
alignItems:"center",


},

top:{
  marginTop:20,

  
},
button:{
  paddingVertical: 12,
  paddingHorizontal: 40,
  borderRadius: 4,
  elevation: 3,
  backgroundColor: '#007AFF'
},
text1:{
  color:"white"
}


})

export default GetStarted
