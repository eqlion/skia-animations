import { polarToCartesian } from './coordinates'

const describeArc = (
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) => {
  // This allows to draw almost full circle. If the end angle is 360 exactly, then no arc is drawn.
  const endAngleAdjusted = endAngle === 360 ? 359.99 : endAngle
  const start = polarToCartesian(x, y, radius, endAngleAdjusted)
  const end = polarToCartesian(x, y, radius, startAngle)

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  const d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ')

  return d
}

export { describeArc }
