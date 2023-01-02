import History from '@/screens/History';
import Operation from '@/screens/Operation';
import Settings from '@/screens/Settings';
import Main from '@/screens/main/Main';
import { Screen } from './types';

export enum Screens {
  Main = 'Main',
  History = 'History',
  Settings = 'Settings',
  Operation = 'Operation',
}

export const screens: Screen[] = [
  { name: Screens.Main, component: Main },
  { name: Screens.History, component: History },
  { name: Screens.Settings, component: Settings },
  { name: Screens.Operation, component: Operation, options: { presentation: 'modal' } },
];
