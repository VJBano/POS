import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { sampleTopSold } from '../constants/test_data';
import StateManager from '../utils/state_manager';

const Sold = () => {

    const sortedTopSold = sampleTopSold.slice().sort((a, b) => b.sold - a.sold);
    const {setVisible} = StateManager.SoldModal()
  return (
    <View style={style.soldView}>
        <View style={style.topSoldView}>
          <Text style={style.soldText}>Sold</Text>
          <Entypo style={style.expand} name="dots-three-horizontal" size={24} color="black" onPress={() => setVisible(true)} />
        </View>

          <ScrollView style={style.soldList}>
            {
              sortedTopSold.map((item, index) => {

                return (
                  <View style={[style.soldRow, index < 3 && { backgroundColor: '#82CD47' }]} key={item.id}>
                    <Text style={[style.soldListText, index < 3 && { fontFamily: "RobotoBold", fontSize:16 }]}>{item.name}</Text>
                    <Text>{item.sold}</Text>
                  </View>
                )
              })
            }
            
            
          </ScrollView>
      </View>
  )
}

const style = StyleSheet.create({
    soldView: {
        display:"flex",
        marginTop:5,
        backgroundColor:"#C3EDC0",
        width:"95%",
        alignSelf:"center",
        padding:5,
        borderRadius:5,
        height:200
      },
      topSoldView:{
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row"
      },
      soldText:{
        fontFamily:"RobotoBold",
        fontSize:17
      },
      expand:{
        fontSize:20,
        marginRight:5
      },
      soldRow:{
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
        paddingLeft:20,
        paddingRight:20,
        marginTop:5,
        borderRadius:5
      },
      soldList:{
        borderTopColor:"black",
        borderTopWidth:1,
        marginTop:5
      },
      soldListText:{
        fontFamily:"RobotoRegular",
        fontSize:17
      },
});

export default Sold