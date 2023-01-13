import { FC, ReactNode } from 'react';
import { Heading, VStack, useColorModeValue } from 'native-base';
import { ThemeSwitchBtn } from '@/components/organisms/theme-switch';

interface Props {
  children?: ReactNode;
}

const Settings: FC<Props> = () => {
  return (
    <VStack
      safeAreaTop
      w="full"
      h="full"
      pt={4}
      bg={useColorModeValue('coolGray.200', 'coolGray.800')}
    >
      <Heading>Settings</Heading>
      <ThemeSwitchBtn />
    </VStack>
  );
};

export default Settings;
