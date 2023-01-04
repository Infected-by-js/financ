import { FC, ReactNode } from 'react';
import { HStack, Icon, Pressable, Text, VStack, useColorModeValue } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Numpad, useNumpad } from '@/features/numpad';
import AmountDisplay from './AmountDisplay';
import ButtonWithIcon from './ButtonWithIcon';
import DatePicker from './DatePicker';
import Header from './Header';
import NoteInput from './NoteInput';

interface Props {
  children?: ReactNode;
}

const Operation: FC<Props> = () => {
  const { value, onSelect } = useNumpad();
  const isEmptyValue = !Number(value);

  return (
    <>
      <VStack w="full" h="full" p={4} bg={useColorModeValue('coolGray.100', 'coolGray.800')}>
        <Header />
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
            variant="solid"
            bg={isEmptyValue ? useColorModeValue('coolGray.200', 'coolGray.700') : 'coolGray.500'}
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
