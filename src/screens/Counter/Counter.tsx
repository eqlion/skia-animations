import React from 'react'
import { StyleSheet, Button, SafeAreaView, View, LayoutAnimation } from 'react-native'
import { GoBackButton } from '../../components'
import { CounterBlock } from './components/CounterBlock'

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center' },
  counterContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})

const Counter: React.FC = () => {
  const [state, setState] = React.useState(0)
  const handlePress = React.useCallback(() => {
    const nextNumber = Math.floor(Math.random() * 10000000)
    // LayoutAnimation.configureNext(
    //   LayoutAnimation.create(50, LayoutAnimation.Types.linear, LayoutAnimation.Properties.opacity)
    // )
    setState(nextNumber)
  }, [])

  return (
    <>
      <SafeAreaView style={styles.screen}>
        <View style={styles.counterContainer}>
          <CounterBlock value={state} color={'#000'} fontSize={60} maxNumber={9999999} />
        </View>
        <Button title="Press" onPress={handlePress} />
      </SafeAreaView>
      <GoBackButton />
    </>
  )
}

export { Counter }
