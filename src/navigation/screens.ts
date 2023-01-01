import History from '@/screens/History';
import Main from '@/screens/Main';
import Settings from '@/screens/Settings';
import { Screen } from './types';

export const screens: Screen[] = [
  { name: 'Main', component: Main },
  { name: 'History', component: History },
  { name: 'Settings', component: Settings },
];
