import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const Scan = () => {
  return (
    <SafeAreaView style={style.main}>
      <Text>Scan</Text>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    marginTop:30
  },
})

export default Scan