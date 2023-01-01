import { FC, ReactNode } from 'react';
import { HStack, Switch, Text, useColorMode } from 'native-base';

interface Props {
  children?: ReactNode;
}

const ThemeToggle: FC<Props> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Light</Text>
      <Switch isChecked={colorMode === 'dark'} onToggle={toggleColorMode} />
      <Text>Dark</Text>
    </HStack>
  );
};

export default ThemeToggle;
