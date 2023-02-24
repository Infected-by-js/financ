import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, useColorMode } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const BtnThemeSwitch: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <TouchableOpacity onPress={toggleColorMode}>
      <Icon
        as={Ionicons}
        name={colorMode === 'dark' ? 'moon' : 'sunny'}
        size="xl"
        color={colorMode === 'dark' ? 'blue.500' : 'amber.500'}
      />
    </TouchableOpacity>
  );
};

export default BtnThemeSwitch;
