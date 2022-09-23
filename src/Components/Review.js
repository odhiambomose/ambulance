import React from 'react'
import {Text,View ,StyleSheet,Image, Button} from "react-native"


const Review = ({navigation}) => {
  return (
    <View>
        <View style={styles.bg}>
            <Image
        style={styles.tinyLogo}
        source={require('../../assets/ambulance2.png')}
      />
 </View>

 <View style={styles.bgbottom}>
<View>
    <Text style={styles.heading}>Locate the nearest Ambulance Available</Text>
 <Text style={styles.paragraph}>Find ambulance in your location Find ambulance in your location</Text>
 </View>

 <View style={styles.flex}>

 <Button
        title="Press me"
        style={styles.btn1}
        onPress={()=>navigation.navigate("Preview")}

      />
<Button
title='Skipp'


style={styles.btn1}
/>
 </View>

 </View>

 
      
    </View>
  )
}

const styles=StyleSheet.create({


tinyLogo: {
    width: 200,
    height: 300,
   
  },

  bg:{
    backgroundColor:"",
    justifyContent:"center",
    alignItems:"center"
    
  },

  bgbottom:{
    backgroundColor:"maroon",
    height:"50%",
    borderTopRightRadius:20,
    borderTopLeftRadius:20,

  },
  heading:{
    fontSize:25,
    textAlign:"center",
    color:"#fff",
    fontWeight:"bold",
    marginTop:15,

    

  },
  paragraph:{
    textAlign:"center",
    paddingTop:15,
    color:"white"
  },
  flex:{
   display:"flex",
   flexDirection:"row",
   justifyContent:"space-between",
   marginTop:"30%",
   margin: 10
   
  }

})

export default Review
