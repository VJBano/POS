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
import { ProductCategory } from './constants/builtin_data';

interface ResponseProps {
  table: string;
  isOk: boolean;
}

export default function App() {

  const [response, setResponse] = useState<ResponseProps[]>([]);
  const [isOk, setIsOk] = useState(false);

  const [fontsLoaded] = useFonts({
    'RobotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
    'PointRegular': require('./assets/fonts/ToThePointRegular-n9y4.ttf'),
    'RobotoBold': require('./assets/fonts/Roboto-Bold.ttf')
  });

  const loadCategory = async () => {
    
    return await LocalStorage.getItem("category");
  }

  
  useEffect(() => {
    setResponse([]);

    CreateTable.user().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "user", isOk: res.success },
      ]);
      setIsOk(res.success);
    });

    CreateTable.product().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "product", isOk: res.success },
      ]);
      setIsOk(res.success);
    });


    CreateTable.sales().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "sales", isOk: res.success },
      ]);
      setIsOk(res.success);
    });

    
    CreateTable.expenses().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "expenses", isOk: res.success },
      ]);
      setIsOk(res.success);
    });

    CreateTable.debt().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "debt", isOk: res.success },
      ]);
      setIsOk(res.success);
    });
 
    CreateTable.debt_product().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "debt_product", isOk: res.success },
      ]);
      setIsOk(res.success);
    });

    CreateTable.product_category().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "product_category", isOk: res.success },
      ]);
      setIsOk(res.success);
    });

    CreateTable.logs().then((res) => {
      setResponse((prevResponse) => [
        ...(prevResponse || []),
        { table: "logs", isOk: res.success },
      ]);
      setIsOk(res.success);
    });

    // Read.getProductStocks().then((res) => {
    //   console.log("stocks: ", res)
    // });
    // LocalStorage.getItem("deviceinfo").then((res) => {
    //   console.log("storafe: ", res)
    // });

    const LoadProductCategory = async () => {
      
      const categoryData = await loadCategory();

        if(categoryData) {

            const category = JSON.parse(categoryData);
            if(category.status !== 1) {

                ProductCategory.forEach((p_catogory) => {
                  Create.product_category(p_catogory).then((res) => {
                    if(res == 1) {
                      setIsOk(true);
                    } else {
                      setIsOk(false);
                      
                    }
                  });
                });
            } 
        } else {

          ProductCategory.forEach((p_catogory) => {
            Create.product_category(p_catogory).then((res) => {
              if(res == 1) {
                setIsOk(true);
              } else {
                setIsOk(false);
              }
            });
          });
        }
    }

    LoadProductCategory();

    if(isOk) {
      
      const category = {
        status:1
      }
      LocalStorage.setItem("category", JSON.stringify(category));
    } else {
      const category = {
        status:0
      }

      LocalStorage.setItem("category", JSON.stringify(category));
    }

  },[]);



  
 
  //  CreateTable.table_checker()
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
    <StatusBar style="auto" />
    {isOk ? <MainScreenStack/>: <Text>Loading...</Text>}
    
    {/* <Dashboard/> */}
    </>
  );
}
