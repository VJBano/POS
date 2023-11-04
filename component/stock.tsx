import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { sampleStocks } from '../constants/test_data';

const Stock = () => {

    const sortedStocks = sampleStocks.slice().sort((a, b) => a.sold - b.sold);
    
  return (
    <View style={style.stockView}>
        <View style={style.topStockView}>
          <Text style={style.soldText}>Stocks</Text>
          <Entypo style={style.expand} name="dots-three-horizontal" size={24} color="black" />
        </View>

          <ScrollView style={style.stockList}>
            {
              sortedStocks.map((item, index) => {

                return (
                  <View style={[style.soldRow, index < 3 && { backgroundColor: '#FE9801' }]} key={item.id}>
                    <Text style={[style.soldListText,index < 3 && { fontFamily: "RobotoBold", fontSize:16 } ]}>{item.name}</Text>
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
    stockList:{
        borderTopColor:"black",
        borderTopWidth:1,
        marginTop:5
      },
      topStockView:{
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row"
      },
      soldText:{
        fontFamily:"RobotoBold",
        fontSize:17
      },
      soldListText:{
        fontFamily:"RobotoRegular",
        fontSize:17
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
      stockView: {
        display:"flex",
        marginTop:10,
        backgroundColor:"#FAD586",
        width:"95%",
        alignSelf:"center",
        padding:5,
        borderRadius:5,
        height:200,
        marginBottom:5
      },
      expand:{
        fontSize:20,
        marginRight:5
      },
});

export default Stock