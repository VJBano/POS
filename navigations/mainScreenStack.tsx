import { createStackNavigator } from '@react-navigation/stack'
import { MainScreenStackParam } from '../constants/screen_stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/login'
import Dashboard from '../screens/dashboard'
import BottomScreenStack from './bottomScreenStack'

const Stack = createStackNavigator<MainScreenStackParam>()

const MainScreenStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Login'} screenOptions={{headerShown:false, }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Main' component={BottomScreenStack}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default MainScreenStack