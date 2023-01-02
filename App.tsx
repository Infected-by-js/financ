import numeral from 'numeral';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigator from '@/navigation/Navigator';
import AuthProvider from '@/providers/AuthProvider';
import ThemeProvider from '@/providers/ThemeProvider';

numeral.register('locale', 'ru-RU', {
  delimiters: {
    thousands: ' ',
    decimal: '.',
  },
  abbreviations: {
    thousand: 'тыc.',
    million: 'млн.',
    billion: 'млрд.',
    trillion: 'трлн.',
  },

  ordinal: (number) => {
    const b = number % 10;
    return ~~((number % 100) / 10) === 1
      ? 'th'
      : b === 1
      ? 'st'
      : b === 2
      ? 'nd'
      : b === 3
      ? 'rd'
      : 'th';
  },

  currency: {
    symbol: '₽',
  },
});

numeral.locale('ru-RU');

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <ThemeProvider>
          <Navigator />
        </ThemeProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
