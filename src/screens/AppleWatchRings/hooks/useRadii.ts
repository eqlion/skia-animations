import React from 'react'
import { useWindowDimensions } from 'react-native'
import { PADDING, RING_GAP, RING_WIDTH } from '../constants'

export const useRadii = () => {
  const { width } = useWindowDimensions()
  const redRadius = width / 2 - PADDING - RING_WIDTH / 2
  const greenRadius = redRadius - RING_WIDTH - RING_GAP
  const blueRadius = greenRadius - RING_WIDTH - RING_GAP
  return React.useMemo(
    () => [redRadius, greenRadius, blueRadius],
    [blueRadius, greenRadius, redRadius]
  )
}
