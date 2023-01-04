import History from '@/screens/History';
import Settings from '@/screens/Settings';
import Main from '@/screens/main/Main';
import Operation from '@/screens/operation/Operation';
import { Screen } from './types';

export const screens: Screen[] = [
  { name: 'Main', component: Main },
  { name: 'History', component: History },
  { name: 'Settings', component: Settings },
  { name: 'Operation', component: Operation, options: { presentation: 'modal' } },
];
