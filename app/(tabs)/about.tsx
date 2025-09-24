import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { iconsImg } from '@/assets/asset'

const about = () => {
  return (
    <SafeAreaView>
      <ImageBackground source={iconsImg.BackGroundImg} className='w-full h-full'>
        <View className='flex-1 justify-center items-center'>
          <Text className='text-white'>About Tab</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default about