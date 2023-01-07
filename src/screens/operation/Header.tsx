import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, HStack, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { OperationType } from '@/shared/types/models';

interface Props {
  activeOperationType: OperationType;
  toogleOperationType: () => void;
}

const Header: FC<Props> = ({ toogleOperationType, activeOperationType }) => {
  const navigation = useNavigation();

  return (
    <HStack space={5} w="full" justifyContent="center" pt={2}>
      <Center w="1/3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Отменить</Text>
        </TouchableOpacity>
      </Center>

      <Center w="1/3">
        <TouchableOpacity onPress={toogleOperationType}>
          <Text fontSize="md" fontWeight="bold">
            {activeOperationType === 'deposit' ? 'Пополнение' : 'Снятие'}
          </Text>
        </TouchableOpacity>
      </Center>

      <Center w="1/3" />
    </HStack>
  );
};

export default Header;
