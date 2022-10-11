import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Counter, Main, Wave, AppleWatchRings } from '../screens'
import { EScreens, RootStackParamList } from './types'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export const Navigator: React.FC = () => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={EScreens.Main} component={Main} />
      <RootStack.Screen name={EScreens.Wave} component={Wave} />
      <RootStack.Screen name={EScreens.Counter} component={Counter} />
      <RootStack.Screen name={EScreens.AppleWatchRings} component={AppleWatchRings} />
    </RootStack.Navigator>
  </NavigationContainer>
)
