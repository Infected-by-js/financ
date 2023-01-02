import { ComponentType } from 'react';
import { Screens } from './screens';

export type ScreenName = keyof typeof Screens;
export interface Screen {
  name: ScreenName;
  component: ComponentType;
  options?: object;
}
