import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView style={{
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         padding: 16,
    }}>

      <Text style={{
        fontFamily:"RobotoBold"
      }}>Login</Text>
    </SafeAreaView>
    </>
    
  )
}

export default Login