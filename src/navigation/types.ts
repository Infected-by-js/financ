import { ComponentType } from 'react';

export type RootParamList = {
  Main: undefined;
  History: undefined;
  Settings: undefined;
};

export interface Screen {
  name: keyof RootParamList;
  component: ComponentType;
}
