import React from 'react'

const usePreviousValue = <TValue>(value?: TValue): TValue | undefined => {
  const prevValue = React.useRef<TValue>()

  React.useEffect(() => {
    prevValue.current = value

    return () => {
      prevValue.current = undefined
    }
  })

  return prevValue.current
}

export { usePreviousValue }
