import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomScreenStackParam, MainScreenStackParam } from '../constants/screen_stack';
import { StackScreenProps } from '@react-navigation/stack';
import Dashboard from '../screens/dashboard';
import colors from '../assets/styles/colors';
import { AntDesign ,Octicons,MaterialIcons} from '@expo/vector-icons';

import Scan from '../screens/scan';
import Product from '../screens/product';
import Setting from '../screens/setting';
import Sale from '../screens/sale';


const Tab = createBottomTabNavigator<BottomScreenStackParam>();

const BottomScreenStack = ({navigation, route} :StackScreenProps<MainScreenStackParam, 'Main'>) => {

    const { id, firstname, lastname, store } = route.params;

  return (
    <Tab.Navigator initialRouteName="Dashboard"
    screenOptions={{
      tabBarInactiveTintColor: "gray",
      tabBarStyle:{height:55},
    }}>

<Tab.Screen
        name="Dashboard"
        component={Dashboard}
        initialParams={{id:id,firstname:firstname, lastname:lastname, store: store}}
        options={{
          tabBarLabelStyle: { fontSize: 13, fontFamily:"RobotoBold", paddingBottom:5 },
          tabBarActiveTintColor: colors.royalBlue,
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          ),

        //   headerTitle: () => ReadingScreenProps(),
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.royalBlue,
          },
          headerTintColor: colors.royalBlue,
          headerLeft: () => null,
          headerTitleAlign: "center",
        }}
      /> 

<Tab.Screen
        name="Sales"
        component={Sale}
        initialParams={{id:id,firstname:firstname, lastname:lastname, store: store}}
        options={{
          tabBarLabelStyle: { fontSize: 13, fontFamily:"RobotoBold", paddingBottom:5 },
          tabBarActiveTintColor: colors.royalBlue,
          tabBarIcon: ({ focused, color, size }) => (
            <Octicons name="checklist" size={size} color={color} />
          ),

        //   headerTitle: () => ReadingScreenProps(),
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.royalBlue,
          },
          headerTintColor: colors.royalBlue,
          headerLeft: () => null,
          headerTitleAlign: "center",
        }}
      /> 

<Tab.Screen
        name="Scan"
        component={Scan}
        initialParams={{id:id,firstname:firstname, lastname:lastname, store: store}}
        options={{
          tabBarLabelStyle: { fontSize: 13, fontFamily:"RobotoBold", paddingBottom:5 },
          tabBarActiveTintColor: colors.royalBlue,
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="scan1" size={size} color={color} />
          ),

        //   headerTitle: () => ReadingScreenProps(),
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.royalBlue,
          },
          headerTintColor: colors.royalBlue,
          headerLeft: () => null,
          headerTitleAlign: "center",
        }}
      /> 
      <Tab.Screen
        name="Product"
        component={Product}
        initialParams={{id:id,firstname:firstname, lastname:lastname, store: store}}
        options={{
          tabBarLabelStyle: { fontSize: 13, fontFamily:"RobotoBold", paddingBottom:5 },
          tabBarActiveTintColor: colors.royalBlue,
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="inventory" size={size} color={color} />
          ),

        //   headerTitle: () => ReadingScreenProps(),
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.royalBlue,
          },
          headerTintColor: colors.royalBlue,
          headerLeft: () => null,
          headerTitleAlign: "center",
        }}
      />

<Tab.Screen
        name="Setting"
        component={Setting}
        initialParams={{id:id,firstname:firstname, lastname:lastname, store: store}}
        options={{
          tabBarLabelStyle: { fontSize: 13, fontFamily:"RobotoBold", paddingBottom:5 },
          tabBarActiveTintColor: colors.royalBlue,
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),

        //   headerTitle: () => ReadingScreenProps(),
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.royalBlue,
          },
          headerTintColor: colors.royalBlue,
          headerLeft: () => null,
          headerTitleAlign: "center",
        }}
      />
      
    </Tab.Navigator>
  )
}

export default BottomScreenStack