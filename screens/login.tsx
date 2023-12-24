import { View, Text, SafeAreaView, StatusBar,TextInput, TouchableOpacity,ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Splash_Screen from '../component/splash_screen';
import { StackScreenProps } from '@react-navigation/stack';
import { MainScreenStackParam } from '../constants/screen_stack';
import { LoginStyle } from '../assets/styles/Login';
import { LinearGradient } from "expo-linear-gradient";
import  Colors from '../assets/styles/colors';
import LocalStorage from '../utils/local_storage';
import { Connectivity } from '../utils/connectivity';
import { DeviceInfo } from '../utils/device_info';
import { Device } from '../constants/device';
import UserFirebase from '../database/firebase/user';
import { User } from '../constants/user';
import IDGenerator from '../utils/id_generator';
import Create from '../database/create';
import Read from '../database/read';
import Delete from '../database/delete';
import { useIsFocused } from '@react-navigation/native';


const Login = ({navigation, route}:StackScreenProps<MainScreenStackParam, 'Login'>) => {

  const isFocused = useIsFocused();
  
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [complete, setComplete] = useState(false);
  const [counter, setCounter] = useState(0);
  const [storeName, setStoreName] = useState("Store Name Here");

  const noNetwork = () => {
    ToastAndroid.show('Please Connect to Internet', ToastAndroid.SHORT);
  }

  useEffect(() => {
    setMessage("");
  },[email, password, isFocused]);

  useEffect(() => {

    Read.user().then((res) => {
    
      if(res?.length !== 0) {
        setStoreName(res?.[0].store_name as string);
      }

    });

  },[]);

  useEffect(() => {

    if(route.name == 'Login'){
      setIsLoading(true);
      setComplete(false);
      setEmail("");
      setPassword("");
      setCounter(0);
      
    }

    //? check if the device has detail access to firebase
    LocalStorage.getItem("deviceinfo").then((res) => {

      if(res){
          const deviceData = JSON.parse(res);
        
          DeviceInfo().then((deviceinfo) => {

            if(deviceinfo.fingerprint == deviceData.fingerprint) {
             
              setComplete(true);
               
            } else {
              Delete.allUser().then((res) => {
                console.log("delete: ", res)
              });

              setComplete(false);
            }
          });     
      } else {
        Connectivity().then((internet) => {
            if(internet) {
                DeviceInfo().then((deviceinfo) => {

                  const device:Device = {
                    brand: deviceinfo.brand as string,
                    fingerprint: deviceinfo.fingerprint as string,
                    manufacturer: deviceinfo.manufacturer as string
                  } 

                  console.log("device: ", deviceinfo)

                  UserFirebase.getUserByDeviceData(deviceinfo.fingerprint).then((resfirebase) => {
                   
                    if(resfirebase.email !== "" && resfirebase.password !== "" ) {
                      
                      console.log("from fb: ", resfirebase);
                      LocalStorage.setItem("deviceinfo", JSON.stringify(device));

                      const toUserDB:User = {
                        id:IDGenerator.uuid(),
                        first_name:resfirebase.first_name,
                        last_name:resfirebase.last_name,
                        email:resfirebase.email,
                        password:resfirebase.password,
                        store_name:resfirebase.store_name,
                        address:resfirebase.address,
                        permit_no:resfirebase.permit_no,
                        contact_no:resfirebase.contact_no,
                      }

                      Create.user(toUserDB).then((res) => {
                            console.log("user: ", res)
                         });

                         setComplete(true);
                    } else {
                      LocalStorage.clearItem();
                      setComplete(false)
                    }
                  });
                  
                });

            } else {

              noNetwork();
              setComplete(false);
            }
        });
      }
    });

  },[counter]);

  const handleLogin = async () => {

    if(complete) {
      const user = await Read.userByEmailAndPassword(email, password);

      if(user?.length !== 0 && user?.[0].password == password){

        setMessage("sakto siya kay bae man!");

        return navigation.navigate('Main',{
          id:user?.[0].id,
          firstname: user?.[0].first_name,
          lastname:user?.[0].last_name,
          store:user?.[0].store_name,
        })
        
      } else {
        setMessage("sayop kay laki man ka!");
      } 

    }

  }

  const handleRefresh = async () => {
      setCounter(counter + 1)
  }

  return (
    <>
     <StatusBar barStyle="dark-content"/>
    {isLoading ? <Splash_Screen Loader={setIsLoading}/> :
        <SafeAreaView style={LoginStyle.main}>
      <View style={LoginStyle.container}>
        <View style={LoginStyle.wFull}>
          <View style={LoginStyle.row}>
          {/* <SvgXml xml={store} width="20%"/> */}
            <Text style={LoginStyle.brandName}>{storeName}</Text>
          </View>
  
          <Text style={LoginStyle.loginContinueTxt}>Login to continue</Text>
          <Text style={LoginStyle.loginMessage}>{message}</Text>
          <TextInput style={LoginStyle.input} value={email} onChangeText={text => setEmail(text)} placeholder="Email" />
          <TextInput secureTextEntry style={LoginStyle.input} value={password} onChangeText={pass => setPassword(pass)} placeholder="Password" />

          {complete?
          <View style={LoginStyle.loginBtnWrapper}>
             <LinearGradient
            // 
              colors={[Colors.deepBlue,Colors.dodgerBlue ]}
              style={LoginStyle.linearGradient}
              start={{y: 0.0, x: 0.0}}
              end={{y: 1.0, x: 0.0}}>
              {/******************** LOGIN BUTTON *********************/}
              <TouchableOpacity
                 onPress={() => handleLogin()}
                activeOpacity={0.7}
                style={LoginStyle.loginBtn}>
                <Text style={LoginStyle.loginText}>Log In</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>:  <LinearGradient
              colors={[ Colors.gradientForm, Colors.primary]}
              style={LoginStyle.linearGradient}
              start={{y: 0.0, x: 0.0}}
              end={{y: 1.0, x: 0.0}}>
              {/******************** LOGIN BUTTON *********************/}
              <TouchableOpacity
                 onPress={() => handleRefresh()}
                activeOpacity={0.7}
                style={LoginStyle.loginBtn}>
                <Text style={LoginStyle.loginText}>Refresh</Text>
              </TouchableOpacity>
            </LinearGradient>}
          
        </View>
      </View>
    </SafeAreaView>
    } 



    </>
    
  )
}

export default Login