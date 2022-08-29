import { Color } from '@shopify/react-native-skia'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CounterElement } from './CounterElement'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

type CounterBlockProps = {
  value: number
  color?: Color
  fontSize: number
  /** The max value, non-inclusive. For example, if value is in [0, 1000], then maxNumber = 1001 */
  maxNumber?: number
}

const CounterBlock: React.FC<CounterBlockProps> = ({ value, color, fontSize, maxNumber }) => {
  const digits = String(value).split('').map(Number)
  const fixedDigits = [
    ...Array.from(
      { length: Math.ceil(Math.log10(maxNumber ?? 1)) - digits.length },
      () => undefined
    ),
    ...digits,
  ]

  return (
    <View style={styles.container}>
      {fixedDigits.map((digit, index) => (
        <CounterElement value={digit} key={index} color={color} fontSize={fontSize} />
      ))}
    </View>
  )
}

export { CounterBlock }
