import React from 'react'
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native'

const SignupScreen = () => {
  return (
    <View>
      <Text>Register</Text>

      <TextInput
      style={styles.inputEmail}
      placeholder="Email"
      
      />

      <TouchableOpacity>
        <Text>Signup</Text>
      </TouchableOpacity>
      
    </View>
  )
}



const styles=StyleSheet.create({
inputEmail:{
    
}
})

export default SignupScreen
