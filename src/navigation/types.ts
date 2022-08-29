export enum EScreens {
  Main = 'Main',
  Wave = 'Wave',
  Counter = 'Counter',
}

export type RootStackParamList = {
  [EScreens.Main]: undefined
  [EScreens.Wave]: undefined
  [EScreens.Counter]: undefined
}

export type ScreensWithoutMain = Exclude<EScreens, EScreens.Main>
