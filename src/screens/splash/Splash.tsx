import { FC, ReactNode } from 'react';
import { Icon, Pressable, VStack, useColorModeValue } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  children?: ReactNode;
}

const Splash: FC<Props> = () => {
  return (
    <VStack
      safeArea
      alignItems="center"
      justifyContent="center"
      flex={1}
      w="full"
      h="full"
      p={4}
      bg={useColorModeValue('coolGray.100', 'coolGray.800')}
    >
      <Pressable>
        <Icon as={Ionicons} name="cash-outline" size="100" color="coolGray.400" />
      </Pressable>
    </VStack>
  );
};
export default Splash;
