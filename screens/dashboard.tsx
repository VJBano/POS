import { View, Text, SafeAreaView, StyleSheet, ScrollView, ScrollViewBase, Modal, Button } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { BottomScreenStackParam } from '../constants/screen_stack';
import { Currency } from '../utils/currency';
import { Entypo } from '@expo/vector-icons';
import { sampleStocks, sampleTopSold } from '../constants/test_data';
import Sold from '../component/sold';
import Stock from '../component/stock';
import StateManager from '../utils/state_manager';
//{navigation, route}:StackScreenProps<MainScreenStackParam, 'Dashboard'>

const Dashboard = ({navigation, route}:StackScreenProps<BottomScreenStackParam, 'Dashboard'>) => {

   const { firstname, lastname } = route.params;

   const { visible, setVisible } = StateManager.SoldModal()
  const amount = Currency(20000, "Php")

  return (
    <SafeAreaView style={style.main}>
      <View style={style.topArea}>
        
        <Text style={style.welcome}>Welcome {firstname + " "+ lastname}</Text>
       
       
        <View style={style.todaySales}>
          <View style= {style.salesVIew}>
          <Text style={style.todaySalesText}>Today's Sales</Text>
          <Entypo style={style.expand} name="dots-three-horizontal" size={24} color="black" />
         
          </View>
          <Text style={style.amountText}>{amount}</Text>
        </View>
      </View>

    
    <ScrollView style={{
      display: "flex",
      height: "100%",
      width: "100%",
    }}>
      <Sold/>
      <Modal visible={visible}>
        <View style={{ flex: 1,}}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={() => setVisible(false)} />
        </View>
        
      </Modal>


      {/* stocks */}
      <Stock/>

      {/* Sales */}


    </ScrollView>
  

    </SafeAreaView>
  )
}

const style = StyleSheet.create({

  main: {
    flex: 1,
    alignItems: 'center',
    marginTop:30
  },
  todaySalesText:{
    fontFamily:"RobotoBold",
    fontSize:17,
    padding:4
  },
  expand:{
    fontSize:20,
    marginRight:5
  },
  salesVIew:{
    justifyContent:"space-between",
    alignItems:"center",
    display:"flex",
    flexDirection:"row",
    width:"100%",
    // backgroundColor:"yellow"
  },
  amountText:{
    fontFamily:"RobotoBold",
    fontSize:25,
    marginLeft:7,
    padding:4
  },
  todaySales:{
    backgroundColor:"#05BFDB",
    width:"95%",
    display:"flex",
    justifyContent:"flex-start",
    alignSelf:"center",
    height:"60%",
    borderRadius:5
  },
  welcome: {
    padding:5,
    fontFamily:"RobotoBold",
    fontSize:20
  },

  topArea: {
    // backgroundColor:"green",
    width:"100%",
    height:"20%"
  }

});

export default Dashboard