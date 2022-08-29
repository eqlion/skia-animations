import {
  Extrapolate,
  Group,
  interpolate,
  Path,
  Skia,
  SkiaClockValue,
  useComputedValue,
  useValue,
  useValueEffect,
} from '@shopify/react-native-skia'
import React, { FC } from 'react'
import { useWindowDimensions } from 'react-native'

type AnimatedWaveProps = { clock: SkiaClockValue }

const WAVE_HEIGHT = 100

const createGraphPath = (width: number, height: number) => {
  const retVal = Skia.Path.Make()
  retVal.moveTo(0, height)
  retVal.cubicTo(0, height, 0.06 * width, 0 + Math.random(), 0.2 * width, 0)
  retVal.cubicTo(0.4 * width, 0, 0.36 * width, 0.8 * height, 0.5 * width, 0.8 * height)
  retVal.cubicTo(
    0.68 * width,
    0.8 * height,
    0.66 * width,
    0.25 * height,
    0.8 * width,
    0.25 * height
  )
  retVal.cubicTo(0.96 * width, 0.25 * height, width, height, width, height)

  return retVal
}

const AnimatedWave: FC<AnimatedWaveProps> = ({ clock }) => {
  const { width, height } = useWindowDimensions()
  const position = useValue(height - WAVE_HEIGHT)
  const waveHeight = useValue(WAVE_HEIGHT)
  const path = useComputedValue(() => {
    return createGraphPath(width, waveHeight.current)
  }, [waveHeight])

  const transform = useComputedValue(() => [{ translateY: position.current + 1 }], [position])

  useValueEffect(clock, () => {
    waveHeight.current = interpolate(
      clock.current,
      [0, 4000],
      [WAVE_HEIGHT, WAVE_HEIGHT / 3],
      Extrapolate.CLAMP
    )
    position.current = interpolate(
      clock.current,
      [0, 4000],
      [height - waveHeight.current, -waveHeight.current],
      Extrapolate.CLAMP
    )
  })

  return (
    <Group color={'#99f'} transform={transform}>
      <Path path={path} style="fill" />
    </Group>
  )
}

export { AnimatedWave }
