import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Canvas, useClockValue } from '@shopify/react-native-skia'
import { AnimatedRect, AnimatedWave } from './components'
import { GoBackButton } from '../../components'

const styles = StyleSheet.create({ canvas: { flex: 1 } })

const Wave: React.FC = () => {
  const clock = useClockValue()
  return (
    <View style={styles.canvas}>
      <GoBackButton />
      <Canvas style={styles.canvas}>
        <AnimatedWave clock={clock} />
        <AnimatedRect clock={clock} />
      </Canvas>
    </View>
  )
}

export { Wave }
