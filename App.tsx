import React from 'react'
import { StatusBar } from 'react-native'
import { Navigator } from './src'

const App = () => {
  return (
    <>
      <StatusBar animated barStyle="dark-content" />
      <Navigator />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
