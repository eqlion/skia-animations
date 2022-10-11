import { useValue } from '@shopify/react-native-skia'
import React from 'react'

export const useProgresses = () => {
  const redProgress = useValue(0)
  const greenProgress = useValue(0)
  const blueProgress = useValue(0)
  return React.useMemo(
    () => [redProgress, blueProgress, greenProgress],
    [redProgress, blueProgress, greenProgress]
  )
}
