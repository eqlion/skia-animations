import { EIcon } from './types'

const RING_WIDTH = 30
const RING_GAP = 3
const ICON_SIZE = (RING_WIDTH * 2) / 3
const PADDING = 16
const ANIMATION_DURATION = 2000
const MAX_ANGLE = 720
const FULL_CIRCLE = 360

const COLORS = [
  {
    start: '#fa124e',
    end: '#F93986',
    underlying: '#380A17',
  },
  {
    start: '#99FE00',
    end: '#D7FF01',
    underlying: '#273909',
  },
  {
    start: '#00D8FF',
    end: '#03FFAA',
    underlying: '#093939',
  },
] as const
const ICONS = [EIcon.Right, EIcon.DoubleRight, EIcon.Up]

export {
  RING_GAP,
  RING_WIDTH,
  ICON_SIZE,
  PADDING,
  ANIMATION_DURATION,
  COLORS,
  ICONS,
  MAX_ANGLE,
  FULL_CIRCLE,
}
