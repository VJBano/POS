import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

interface LoadingProps {
    Loader: React.Dispatch<React.SetStateAction<boolean>>;
}

const Splash_Screen = ({Loader}:LoadingProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', margin: 0}}>
        <LottieView 
        source={require('../assets/splash_screen/store.json')}
        autoPlay
        loop={false}
        resizeMode="contain"
        onAnimationFinish={() => Loader(false)}
        />

    </View>
  )
}

export default Splash_Screen