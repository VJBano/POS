import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import MainScreenStack from './navigations/mainScreenStack';
import CreateTable from './database/table';
import { useEffect, useState } from 'react';
import { User } from './constants/user';
import IDGenerator from './utils/id_generator';
import Create from './database/create';
import { DeviceInfo } from './utils/device_info';
import UserFirebase from './database/firebase/user';
import Read from './database/read';
import Delete from './database/delete';
import LocalStorage from './utils/local_storage';
import Dashboard from './screens/dashboard';

interface ResponseProps {
  table: string;
  isOk: boolean;
}

export default function App() {
  
  const [response, setResponse] = useState<ResponseProps[]>([]);

  const [fontsLoaded] = useFonts({
    'RobotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
    'PointRegular': require('./assets/fonts/ToThePointRegular-n9y4.ttf'),
    'RobotoBold': require('./assets/fonts/Roboto-Bold.ttf')
  });

  
  useEffect(() => {
    setResponse([]);

    // CreateTable.dropTable("user").then((res) => {
    //   console.log("Drop Table: ", res)
    // });
    CreateTable.user().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "user", isOk: res.success },
      ]);
    });

    CreateTable.product().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "product", isOk: res.success },
      ]);
    });


    CreateTable.sales().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "sales", isOk: res.success },
      ]);
    });

    
    CreateTable.expenses().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "expenses", isOk: res.success },
      ]);
    });

    CreateTable.debt().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "debt", isOk: res.success },
      ]);
    });
 
    CreateTable.debt_product().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "debt_product", isOk: res.success },
      ]);
    });

    CreateTable.product_category().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "product_category", isOk: res.success },
      ]);
    });

    CreateTable.logs().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "logs", isOk: res.success },
      ]);
    });


    // const userData:User = {
    //   id:IDGenerator.uuid(),
    //   first_name:"vanz",
    //   last_name:"bano",
    //   email:"vanz@gmail.com",
    //   password:"12345",
    //   store_name:"java vanz",
    //   address:"valaga mabini Bohol",
    //   permit_no:"324354354",
    //   contact_no:"4356565",
    // }

    // Create.user(userData).then((res) => {
    //     console.log("user: ", res)
    // });

    // DeviceInfo().then((res) => {

    //   UserFirebase.getUserByDeviceData(res.fingerprint).then((resfirebase) => {
    //     console.log("data from fb: ",resfirebase)
    //   })
    // })

    // Read.userByEmailAndPassword("vanz@gmail.com","12345").then((res) => {
    //       console.log("User: ", res)
    // });

    // Delete.allUser().then((res) => {
    //   console.log("delete: ", res)
    // })

    //  LocalStorage.clearItem();


    Read.user().then((res) => {
      console.log("Users: ", res)
    });
    LocalStorage.getItem("deviceinfo").then((res) => {
      console.log("storafe: ", res)
    });


 

  },[]);



  
 
   CreateTable.table_checker()
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
    <StatusBar style="auto" />
    <MainScreenStack/>
    {/* <Dashboard/> */}
    </>
  );
}
