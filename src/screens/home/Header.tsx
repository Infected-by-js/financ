import { FC } from 'react';
import { Avatar, HStack, Icon, IconButton, Text, useColorModeValue } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { User } from '@/types/models';

interface Props {
  user: User | null;
  onPress: () => void;
}

const Header: FC<Props> = ({ user, onPress }) => {
  return (
    <HStack alignItems="center" justifyContent="space-between" w="full" mb={3}>
      <HStack alignItems="center">
        {user?.avatar ? (
          <Avatar source={{ uri: user?.avatar }} size="md" />
        ) : (
          <Text fontSize="3xl">🥰</Text>
        )}
      </HStack>

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
