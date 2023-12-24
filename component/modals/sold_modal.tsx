import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import StateManager from '../../utils/state_manager';
import { Feather } from '@expo/vector-icons';
import colors from '../../assets/styles/colors';

const Sold_Modal = () => {

    const { visible, setVisible } = StateManager.SoldModal();
    
  return (
    <SafeAreaView style={style.main}>
        <View style={style.header}>
        <Feather onPress={() => setVisible(false)} name="arrow-left" size={24} color="black" />
        <View style={style.header_name}>
            <Text style={style.header_name_text}>Sold</Text>
        </View>
        </View>
        <Text>Hello Much</Text>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    main : {
        flex: 1,
        alignItems: 'center',
        
    },

    header: {
        display:"flex",
        flexDirection:"row",
        backgroundColor:colors.limeGreen,
        padding:5,
        width: "100%"
    },

    header_name: {
        width:"85%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },

    header_name_text: {
        fontFamily:"RobotoBold",
        fontSize:17
    }
})

export default Sold_Modal