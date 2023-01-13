import { FC } from 'react';
import { Box, HStack, Icon, IconButton, Text, useColorModeValue } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { User } from '@/types/models';

interface Props {
  user: User | null;
  onPress: () => void;
}

const Header: FC<Props> = ({ user, onPress }) => {
  return (
    <HStack alignItems="center" justifyContent="space-between" w="full" mb={3}>
      <Box>
        <Text fontSize="md">Привет, </Text>
        <Text fontSize="md" fontWeight="bold">
          {user?.name}
        </Text>
      </Box>
      <IconButton
        onPress={onPress}
        icon={
          <Icon
            as={AntDesign}
            name="plus"
            color={useColorModeValue('coolGray.200', 'coolGray.800')}
          />
        }
        bg={useColorModeValue('coolGray.800', 'coolGray.200')}
        rounded="full"
        size="sm"
        _pressed={{
          bg: useColorModeValue('coolGray.700', 'coolGray.300'),
        }}
      />
    </HStack>
  );
};

export default Header;
