export enum EScreens {
  Main = 'Main',
  Wave = 'Wave',
  Counter = 'Counter',
  AppleWatchRings = 'Apple Watch Rings',
}

export type RootStackParamList = {
  [EScreens.Main]: undefined
  [EScreens.Wave]: undefined
  [EScreens.Counter]: undefined
  [EScreens.AppleWatchRings]: undefined
}

export type ScreensWithoutMain = Exclude<EScreens, EScreens.Main>
