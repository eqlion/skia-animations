import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Counter } from '../screens/Counter'
import { Main } from '../screens/Main'
import { Wave } from '../screens/Wave'
import { EScreens, RootStackParamList } from './types'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export const Navigator: React.FC = () => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={EScreens.Main} component={Main} />
      <RootStack.Screen name={EScreens.Wave} component={Wave} />
      <RootStack.Screen name={EScreens.Counter} component={Counter} />
    </RootStack.Navigator>
  </NavigationContainer>
)
