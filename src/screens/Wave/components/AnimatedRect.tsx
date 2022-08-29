import {
  Extrapolate,
  interpolate,
  Rect,
  SkiaClockValue,
  useComputedValue,
  useValue,
  useValueEffect,
} from '@shopify/react-native-skia'
import React, { FC } from 'react'
import { useWindowDimensions } from 'react-native'

type AnimatedRectProps = {
  clock: SkiaClockValue
}

const AnimatedRect: FC<AnimatedRectProps> = ({ clock }) => {
  const { width, height } = useWindowDimensions()
  const rectHeight = useValue(0)
  const rectPosition = useComputedValue(() => height - rectHeight.current, [rectHeight])

  useValueEffect(clock, () => {
    rectHeight.current = interpolate(clock.current, [0, 4000], [0, height], Extrapolate.CLAMP)
  })

  return <Rect x={0} y={rectPosition} width={width} height={rectHeight} color="#99f" />
}

export { AnimatedRect }
