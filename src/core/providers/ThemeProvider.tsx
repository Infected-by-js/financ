import { FC, ReactNode } from 'react';
import { ColorMode, NativeBaseProvider, StorageManager } from 'native-base';
import { StorageService } from '@/services';
import themeConfig from '../config/themeConfig';

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        const theme = await StorageService.getItem<ColorMode>('theme');
        return theme === 'dark' ? 'dark' : 'light'; // for typescript
      } catch {
        return 'light';
      }
    },

    set: (value: ColorMode) => StorageService.setItem('theme', value),
  };

  return (
    <NativeBaseProvider theme={themeConfig} colorModeManager={colorModeManager}>
      {children}
    </NativeBaseProvider>
  );
};

export default ThemeProvider;
