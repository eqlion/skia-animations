import { useNavigation } from '@react-navigation/native'
import { Canvas, Circle, Points, Shadow, vec } from '@shopify/react-native-skia'
import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SIZE = 40
const OFFSET = 16

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
  },
})

const points = [
  vec(OFFSET + SIZE - 18, OFFSET + 15),
  vec(OFFSET + 16, OFFSET + SIZE / 2),
  vec(OFFSET + SIZE - 18, OFFSET + SIZE - 15),
]

const GoBackButton: React.FC = () => {
  const navigation = useNavigation()
  const { top } = useSafeAreaInsets()

  const handlePress = React.useCallback(() => {
    navigation.goBack()
  }, [navigation])

  return (
    <Pressable onPress={handlePress} style={[styles.container, { top }]}>
      <Canvas style={{ width: SIZE + OFFSET * 2, height: SIZE + OFFSET * 2 }}>
        <Circle r={SIZE / 2} color="#FFF" cx={SIZE / 2 + OFFSET} cy={SIZE / 2 + OFFSET}>
          <Shadow dx={0} dy={5} blur={6} color="rgba(0,0,0,0.4)" />
        </Circle>
        <Points
          points={points}
          color="rgba(0,0,0,0.6)"
          mode="polygon"
          strokeCap="round"
          strokeWidth={3}
          style="stroke"
        />
      </Canvas>
    </Pressable>
  )
}

export { GoBackButton }
