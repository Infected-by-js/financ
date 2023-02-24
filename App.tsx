import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigator from '@/core/navigation/Navigator';
import LocalizationProvider from '@/core/providers/LocalizationProvider';
import ThemeProvider from '@/core/providers/ThemeProvider';
import AuthProvider from '@/core/providers/UserProvider';

LogBox.ignoreLogs([
  'Key "cancelled" in the image picker result is deprecated and will be removed in SDK 48, use "canceled" instead',
]);

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LocalizationProvider>
        <AuthProvider>
          <ThemeProvider>
            <Navigator />
          </ThemeProvider>
        </AuthProvider>
      </LocalizationProvider>
    </GestureHandlerRootView>
  );
}
