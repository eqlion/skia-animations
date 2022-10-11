import React from 'react'
import { useWindowDimensions } from 'react-native'
import {
  Circle,
  LinearGradient,
  Path,
  Shadow,
  SkiaValue,
  useComputedValue,
  vec,
} from '@shopify/react-native-skia'
import { describeArc, gradToRad, polarToCartesian } from '../../../utils'
import { FULL_CIRCLE, RING_WIDTH } from '../constants'

type RingProps = {
  progress: SkiaValue<number>
  radius: number
  colors: { start: string; end: string; underlying: string }
}

const Ring: React.FC<RingProps> = ({ progress, radius, colors }) => {
  const { width, height } = useWindowDimensions()
  const center = vec(width / 2, height / 2)
  const normalizedProgress = useComputedValue(() => progress.current % FULL_CIRCLE, [progress])

  const path = useComputedValue(
    () => describeArc(center.x, center.y, radius, 0, normalizedProgress.current),
    [normalizedProgress]
  )

  const circleGradPosition = useComputedValue(
    () => polarToCartesian(center.x, center.y, radius, progress.current),
    [progress]
  )

  const circleGradStart = useComputedValue(
    () => vec(circleGradPosition.current.x - RING_WIDTH / 4, circleGradPosition.current.y),
    [circleGradPosition]
  )

  const circleGradEnd = useComputedValue(
    () => vec(circleGradPosition.current.x + RING_WIDTH / 4, circleGradPosition.current.y),
    [circleGradPosition]
  )

  const circleGradRotation = useComputedValue(
    () => [{ rotate: gradToRad(progress.current) }],
    [progress]
  )

  const underCircle = useComputedValue(
    () => (progress.current > FULL_CIRCLE ? colors.start : colors.underlying),
    [progress]
  )

  const shadowX = useComputedValue(
    () => 9 * Math.cos(gradToRad(normalizedProgress.current)),
    [normalizedProgress]
  )
  const shadowY = useComputedValue(
    () => 9 * Math.sin(gradToRad(normalizedProgress.current)),
    [normalizedProgress]
  )

  return (
    <>
      <Path
        path={describeArc(center.x, center.y, radius, 0, FULL_CIRCLE)}
        style="stroke"
        strokeWidth={RING_WIDTH}
        strokeCap="round"
        color={underCircle}
      />
      <Path
        path={path}
        style="stroke"
        strokeWidth={RING_WIDTH}
        strokeCap="round"
        color={colors.start}
      />
      <Circle r={RING_WIDTH / 2} c={circleGradPosition}>
        <LinearGradient
          start={circleGradStart}
          end={circleGradEnd}
          colors={[colors.start, colors.end]}
          origin={circleGradPosition}
          transform={circleGradRotation}
        />
        <Shadow dx={shadowX} dy={shadowY} blur={5} color={'rgba(0,0,0,.5)'} />
      </Circle>
    </>
  )
}

export { Ring }
