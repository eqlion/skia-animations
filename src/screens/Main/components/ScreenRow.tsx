import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import { EScreens, RootStackParamList, ScreensWithoutMain } from '../../../navigation'

const styles = StyleSheet.create({
  container: { padding: 16, marginBottom: 8, alignItems: 'center' },
  label: { fontSize: 16, fontWeight: 'bold' },
})

const emojiMap: Record<ScreensWithoutMain, string> = {
  [EScreens.Counter]: '🔢',
  [EScreens.Wave]: '🌊',
}

type ScreenRowProps = { screen: ScreensWithoutMain }
type Navigation = NativeStackNavigationProp<RootStackParamList, EScreens.Main>

const ScreenRow: React.FC<ScreenRowProps> = ({ screen }) => {
  const navigation = useNavigation<Navigation>()

  const handlePress = React.useCallback(() => {
    navigation.navigate(screen)
  }, [navigation, screen])

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.label}>
        {emojiMap[screen]} {screen}
      </Text>
    </Pressable>
  )
}

export { ScreenRow }
