import { HStack, Switch, Text, useColorMode } from 'native-base';

const BtnThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack space={2} alignItems="center">
      <Text>Light</Text>
      <Switch isChecked={colorMode === 'dark'} onToggle={toggleColorMode} />
      <Text>Dark</Text>
    </HStack>
  );
};

export default BtnThemeSwitch;
