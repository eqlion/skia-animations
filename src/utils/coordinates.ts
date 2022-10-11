const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) => {
  const angleInRadians = gradToRad(angleInDegrees - 90)

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

const gradToRad = (grad: number) => {
  return (grad / 180) * Math.PI
}

export { polarToCartesian, gradToRad }
