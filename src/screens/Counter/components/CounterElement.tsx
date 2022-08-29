import {
  Canvas,
  Color,
  Glyphs,
  useFont,
  useSpring,
  useTiming,
  vec,
} from '@shopify/react-native-skia'
import React from 'react'

type CounterElementProps = {
  value?: number
  color?: Color
  fontSize: number
}

const DIGITS = ' 0123456789'

const CounterElement: React.FC<CounterElementProps> = ({ value, color = '#000', fontSize }) => {
  const font = useFont(require('@Assets/fonts/FiraMono-Regular.ttf'), fontSize)
  const normalizedValue = value !== undefined ? value + 1 : 0

  const y = useTiming(-normalizedValue * fontSize - fontSize / 6, { duration: 350 })
  const y2 = useSpring(-normalizedValue * fontSize - fontSize / 6, {
    mass: 1,
    stiffness: 200,
    damping: 17,
  })

  if (!font) {
    return null
  }
  const glyphs = font.getGlyphIDs(DIGITS).map((id, i) => ({ id, pos: vec(0, (i + 1) * fontSize) }))
  const [glyphWidth] = font.getGlyphWidths([glyphs[1].id])

  return (
    <Canvas style={{ width: glyphWidth, height: fontSize }}>
      <Glyphs font={font} glyphs={glyphs} x={0} y={y} color={color} />
    </Canvas>
  )
}

export { CounterElement }
