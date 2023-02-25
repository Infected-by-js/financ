import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigator from '@/core/navigation/Navigator';
import I18nProvider from '@/core/providers/I18nProvider';
import ThemeProvider from '@/core/providers/ThemeProvider';
import AuthProvider from '@/core/providers/UserProvider';

LogBox.ignoreLogs([
  'Key "cancelled" in the image picker result is deprecated and will be removed in SDK 48, use "canceled" instead',
]);

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <I18nProvider>
        <AuthProvider>
          <ThemeProvider>
            <Navigator />
          </ThemeProvider>
        </AuthProvider>
      </I18nProvider>
    </GestureHandlerRootView>
  );
}
