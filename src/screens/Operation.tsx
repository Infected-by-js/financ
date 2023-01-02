import { FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Box,
  Center,
  HStack,
  Icon,
  Input,
  Pressable,
  Text,
  TextArea,
  VStack,
  View,
  useColorModeValue,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Numpad, useNumpad } from '@/features/numpad';
import { toTime } from '@/utils';

interface Props {
  children?: ReactNode;
}

const Operation: FC<Props> = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation();
  const { value, onSelect } = useNumpad();

  const snapPoints = useMemo(() => ['70%'], []);

  const onOpenBottomMenu = useCallback(() => {
    const { current: menu } = bottomSheetRef;

    if (menu) menu.expand();
  }, []);

  return (
    <>
      <VStack w="full" h="full" p={4} bg={useColorModeValue('coolGray.100', 'coolGray.800')}>
        {/* HEADER */}
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

        {/*  INPUT */}
        <Center flex={1}>
          <HStack
            justifyContent="center"
            borderBottomWidth={2}
            py={2}
            borderBottomColor="coolGray.300"
          >
            <Box borderRightColor="coolGray.300" borderRightWidth={1}>
              <Text fontSize="5xl" fontWeight="medium" lineHeight="sm">
                {value}
              </Text>
            </Box>
            <Box>
              <Text fontSize="3xl" lineHeight="sm" color="coolGray.400">
                ₽
              </Text>
            </Box>
          </HStack>
        </Center>

        <HStack py={2} borderBottomColor="coolGray.300" borderBottomWidth={1}>
          {/* TODO: Date picker component */}
          <Text color="coolGray.400" fontSize="md" fontWeight="semibold">
            Сегодня - {toTime(new Date())}
          </Text>

          <Text mx={2} fontSize="md">
            -
          </Text>

          {/* TODO: Open bottom sheet with text area */}
          <TouchableOpacity onPress={() => {}}>
            <Text color="coolGray.400" fontSize="md">
              Добавить заметку
            </Text>
          </TouchableOpacity>
        </HStack>

        {/* POUCH GROUP AND SAVE*/}
        <HStack
          py={2}
          borderBottomColor="coolGray.300"
          borderBottomWidth={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack alignItems="center">
            <TouchableOpacity>
              <Text color="coolGray.500" fontSize="md" fontWeight="semibold">
                💳 Карта
              </Text>
            </TouchableOpacity>

            <Icon as={Ionicons} name="arrow-forward" size="sm" ml={3} mr={6} />

            <TouchableOpacity onPress={onOpenBottomMenu}>
              <Text color="coolGray.500" fontSize="md" fontWeight="semibold">
                🎁 Подарки
              </Text>
            </TouchableOpacity>
          </HStack>

          <Pressable
            variant="solid"
            bg={useColorModeValue('coolGray.200', 'coolGray.500')}
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
              color={useColorModeValue('coolGray.400', 'coolGray.200')}
            >
              Save
            </Text>
          </Pressable>
        </HStack>

        {/* NUMPAD */}
        <VStack safeAreaBottom space={3} px={6} mt={8}>
          {<Numpad onItemClick={onSelect} />}
        </VStack>
      </VStack>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backdropComponent={(props) => (
          <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
        )}
      >
        <View flex={1} alignItems="center">
          <Input
            shadow={2}
            _light={{
              bg: 'coolGray.100',
              _hover: {
                bg: 'coolGray.200',
              },
              _focus: {
                bg: 'coolGray.200:alpha.70',
              },
            }}
            _dark={{
              bg: 'coolGray.800',
              _hover: {
                bg: 'coolGray.900',
              },
              _focus: {
                bg: 'coolGray.900:alpha.70',
              },
            }}
            placeholder="Enter your name"
          />
        </View>
      </BottomSheet>
    </>
  );
};

export default Operation;
