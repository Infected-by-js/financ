import { FC, useState } from 'react';
import { HStack, Icon, Pressable, Text, VStack, useColorModeValue } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { logger } from '@/shared/utils';
import { Operation as IOperation, OperationType } from '@/types/models';
import { Numpad, useNumpad } from '@/components/organisms/numpad';
import { useAuth } from '../../../hooks/useUserContext';
import AmountDisplay from './AmountDisplay';
import ButtonWithIcon from './ButtonWithIcon';
import DatePicker from './DatePicker';
import Header from './Header';
import NoteInput from './NoteInput';

const Operation: FC = () => {
  const navigation = useNavigation();
  const { value, onSelect } = useNumpad();
  const [operationType, setOperationType] = useState<OperationType>('withdraw');

  const groups = []; // get from api
  const pouches = []; // same here
  const { user } = useAuth();
  const selectedGroup = '1';
  const selectedPouch = '1';

  const isEmptyValue = !Number(value);

  const toggleOperationType = () => {
    setOperationType((prev) => (prev === 'withdraw' ? 'deposit' : 'withdraw'));
  };

  const saveOperation = () => {
    logger({
      _id: Date.now().toString(16),
      amount: Number(value),
      date: new Date().toISOString(),
      description: null,
      groupId: selectedGroup,
      pouchId: selectedPouch,
      type: operationType,
      userId: user?._id,
    } as IOperation);

    // after success
    navigation.goBack();
  };

  return (
    <>
      <VStack w="full" h="full" p={4} bg={useColorModeValue('coolGray.100', 'coolGray.800')}>
        <Header toogleOperationType={toggleOperationType} activeOperationType={operationType} />
        <AmountDisplay value={value} />

        <HStack py={2} borderBottomColor="coolGray.300" borderBottomWidth={1}>
          <DatePicker />

          <Text mx={2} fontSize="md">
            -
          </Text>

          <NoteInput />
        </HStack>

        <HStack
          py={2}
          borderBottomColor="coolGray.300"
          borderBottomWidth={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack alignItems="center">
            <ButtonWithIcon text="Карта" icon="💳" onPress={() => {}} />
            <Icon as={Ionicons} name="arrow-forward" size="sm" ml={3} mr={6} />
            <ButtonWithIcon icon="🎁" text="Подарки" onPress={() => {}} />
          </HStack>

          <Pressable
            onPress={saveOperation}
            variant="solid"
            bg={isEmptyValue ? useColorModeValue('coolGray.200', 'coolGray.700') : 'coolGray.500'}
            isDisabled={isEmptyValue}
            rounded="xl"
            px={7}
            py={2}
            _pressed={{
              bg: useColorModeValue('coolGray.300', 'coolGray.400'),
            }}
          >
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color={
                isEmptyValue ? useColorModeValue('coolGray.400', 'coolGray.500') : 'coolGray.50'
              }
            >
              Save
            </Text>
          </Pressable>
        </HStack>

        <VStack safeAreaBottom space={3} px={6} mt={8}>
          <Numpad onItemClick={onSelect} />
        </VStack>
      </VStack>
    </>
  );
};

export default Operation;
