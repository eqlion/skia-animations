import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Canvas, runTiming } from '@shopify/react-native-skia'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { GoBackButton } from '../../components'
import { ANIMATION_DURATION, COLORS, ICONS, MAX_ANGLE, PADDING } from './constants'
import { Ring, Icon } from './components'
import { useProgresses, useRadii } from './hooks'

const styles = StyleSheet.create({
  f1: { flex: 1, backgroundColor: '#000' },
})

const AppleWatchRings: React.FC = () => {
  const { bottom } = useSafeAreaInsets()
  const radii = useRadii()
  const progresses = useProgresses()

  const handlePress = () => {
    progresses.forEach((progress) => {
      const newValue = progress.current === 0 ? Math.random() * MAX_ANGLE : 0
      const duration = (Math.abs(progress.current - newValue) * ANIMATION_DURATION) / MAX_ANGLE

      runTiming(progress, newValue, {
        duration,
      })
    })
  }

  return (
    <>
      <View style={styles.f1}>
        <Canvas style={styles.f1}>
          {radii.map((radius, index) => (
            <React.Fragment key={index}>
              <Ring progress={progresses[index]} radius={radius} colors={COLORS[index]} />
              <Icon type={ICONS[index]} radius={radius} progress={progresses[index]} />
            </React.Fragment>
          ))}
        </Canvas>
        <View style={{ marginBottom: bottom + PADDING }}>
          <Button title="Animate" onPress={handlePress} />
        </View>
      </View>
      <GoBackButton />
    </>
  )
}

export { AppleWatchRings }
