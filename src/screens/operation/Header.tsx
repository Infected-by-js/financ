import { FC, ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, HStack, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

interface Props {
  children?: ReactNode;
}

const Header: FC<Props> = () => {
  const navigation = useNavigation();

  return (
    <HStack space={5} w="full" justifyContent="center" pt={2}>
      <Center w="1/3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Отменить</Text>
        </TouchableOpacity>
      </Center>

      <Center w="1/3">
        <Text fontSize="md" fontWeight="bold">
          Пополнение
        </Text>
      </Center>

      <Center w="1/3" />
    </HStack>
  );
};

export default Header;
