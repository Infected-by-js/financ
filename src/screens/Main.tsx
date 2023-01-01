import React, { FC, ReactNode } from 'react';
import { Box, HStack, Icon, IconButton, Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { getUser } from '@/fixtures/dummy';

interface Props {
  children?: ReactNode;
}

const Main: FC<Props> = () => {
  const user = getUser();
  const navigation = useNavigation();

  const routeToProfile = () => {};

  return (
    <VStack safeAreaTop bg="blueGray.100" w="full" h="full" pt={2}>
      <HStack alignItems="center" justifyContent="space-between" px={4} w="full">
        <Box>
          <Text fontSize="md">Привет, </Text>
          <Text fontSize="md" fontWeight="bold">
            {user.name}
          </Text>
        </Box>

        <Box>
          <IconButton
            icon={<Icon as={AntDesign} name="plus" size="md" />}
            rounded={'full'}
            _light={{
              bg: 'primary.300',
              _icon: {
                color: 'white',
              },
            }}
            _pressed={{
              bg: 'primary.200',
            }}
          />
        </Box>
      </HStack>
    </VStack>
  );
};

export default Main;
