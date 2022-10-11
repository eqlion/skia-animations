import {
  Extrapolate,
  FitBox,
  interpolate,
  Path,
  rect,
  SkiaValue,
  useComputedValue,
} from '@shopify/react-native-skia'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import { ICON_SIZE } from '../constants'
import { EIcon } from '../types'

type IconProps = { type: EIcon; radius: number; progress: SkiaValue<number> }

const Icon: React.FC<IconProps> = ({ type, radius, progress }) => {
  const { width, height } = useWindowDimensions()
  const dst = rect(
    width / 2 - ICON_SIZE / 2,
    height / 2 - ICON_SIZE / 2 - radius,
    ICON_SIZE,
    ICON_SIZE
  )

  const src = rect(0, 0, ICON_SIZE, ICON_SIZE)

  const opacity = useComputedValue(
    () => interpolate(progress.current, [0, 10], [0, 1], Extrapolate.CLAMP),
    [progress]
  )

  switch (type) {
    case EIcon.DoubleRight: {
      return (
        <FitBox src={src} dst={dst}>
          <Path
            color="black"
            style="stroke"
            strokeCap="round"
            path="M1 10H13.5M13.5 10L7 2M13.5 10L7 18M12 2L18.5 10L12 18"
            strokeWidth={3}
            opacity={opacity}
          />
        </FitBox>
      )
    }
    case EIcon.Right: {
      return (
        <FitBox src={src} dst={dst}>
          <Path
            color="black"
            style="stroke"
            strokeCap="round"
            path="M4 10H16.5M16.5 10L10 3M16.5 10L10 17"
            strokeWidth={3}
            opacity={opacity}
          />
        </FitBox>
      )
    }
    case EIcon.Up: {
      return (
        <FitBox src={src} dst={dst}>
          <Path
            color="black"
            style="stroke"
            strokeCap="round"
            path="M10 16.5V4M10 4L3 10M10 4L17 10"
            strokeWidth={3}
            opacity={opacity}
          />
        </FitBox>
      )
    }
    default: {
      // Better safe than sorry
      // eslint-disable-next-line no-console
      console.error(`There's no icon for ${type}`)
      return null
    }
  }
}

export { Icon }
