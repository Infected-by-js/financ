import Navigator from '@/navigation/Navigator';
import ThemeProvider from '@/providers/ThemeProvider';

export default function App() {
  return (
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
  );
}
