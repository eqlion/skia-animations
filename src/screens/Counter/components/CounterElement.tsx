import {
  Canvas,
  Color,
  Glyphs,
  runSpring,
  runTiming,
  useFont,
  useValue,
  vec,
} from '@shopify/react-native-skia'
import React from 'react'

type CounterElementProps = {
  value?: number
  color?: Color
  fontSize: number
  /** If index is supplied, the animation will be staggered*/
  index?: number
}

const DIGITS = ' 0123456789'

const CounterElement: React.FC<CounterElementProps> = ({
  value,
  color = '#000',
  fontSize,
  index,
}) => {
  const font = useFont(require('@Assets/fonts/Roboto-ThinItalic.ttf'), fontSize)
  const y = useValue(0)
  const y2 = useValue(0)

  React.useEffect(() => {
    const normalizedValue = value !== undefined ? value + 1 : 0
    if (index !== undefined) {
      setTimeout(() => {
        runSpring(y2, -normalizedValue * fontSize - fontSize / 6, {
          mass: 1,
          stiffness: 200,
          damping: 17,
        })
      }, index * 50)
    } else {
      runTiming(y, -normalizedValue * fontSize - fontSize / 6, { duration: 350 })
    }
  }, [value, index, fontSize, y, y2])

  if (!font) {
    return null
  }
  const glyphs = font.getGlyphIDs(DIGITS).map((id, i) => ({ id, pos: vec(0, (i + 1) * fontSize) }))
  const [glyphWidth] = font.getGlyphWidths([glyphs[1].id])

  return (
    <Canvas style={{ width: glyphWidth, height: fontSize }}>
      <Glyphs font={font} glyphs={glyphs} x={0} y={y2} color={color} />
    </Canvas>
  )
}

export { CounterElement }
