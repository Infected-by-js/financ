import { FC, ReactNode, useEffect } from 'react';
import { Text } from 'react-native';
import { VStack, useColorModeValue } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@/hooks';

interface Props {
  children?: ReactNode;
}

const Entrance: FC<Props> = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  // get all data
  // redirect to home page

  useEffect(() => {
    navigation.navigate('Home');
  }, [user]);

  return (
    <VStack
      safeAreaTop
      w="full"
      h="full"
      pt={4}
      px={4}
      bg={useColorModeValue('coolGray.100', 'coolGray.800')}
    >
      <Text>Добро пожаловать!</Text>
      <Text>{user?.name}</Text>
    </VStack>
  );
};

export default Entrance;
