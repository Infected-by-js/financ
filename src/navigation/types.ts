import { ComponentType } from 'react';

interface RootStackParamList {
  Main: undefined;
  History: undefined;
  Settings: undefined;
  Operation: undefined;
}

export type ScreenName = keyof RootStackParamList;
export interface Screen {
  name: ScreenName;
  component: ComponentType;
  options?: object;
}
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
