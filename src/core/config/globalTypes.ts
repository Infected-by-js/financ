import { RootStackParamList } from '../navigation/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }

  type Language = 'en' | 'ru';
}
