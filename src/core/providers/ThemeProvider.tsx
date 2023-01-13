import { FC, ReactNode } from 'react';
import { NativeBaseProvider } from 'native-base';
import theme from '@/core/config/themeConfig';

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};

export default ThemeProvider;
