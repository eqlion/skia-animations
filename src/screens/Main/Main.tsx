import React from 'react'
import { StyleSheet, FlatList, ListRenderItem } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EScreens, ScreensWithoutMain } from '../../navigation'
import { ScreenRow } from './components'

const screens = Object.values(EScreens).filter(
  (value) => value !== EScreens.Main
) as ScreensWithoutMain[]

const keyExtractor = (item: ScreensWithoutMain) => item
const renderItem: ListRenderItem<ScreensWithoutMain> = ({ item }) => <ScreenRow screen={item} />

const styles = StyleSheet.create({
  screenContainer: { flex: 1 },
})

const Main: React.FC = () => (
  <SafeAreaView style={styles.screenContainer}>
    <FlatList data={screens} keyExtractor={keyExtractor} renderItem={renderItem} />
  </SafeAreaView>
)

export { Main }
