import { FC } from 'react';
import { Avatar, Box, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  avatar: string | null | undefined;
}

const UserAvatar: FC<Props> = ({ avatar }) => {
  return (
    <Box
      mb={8}
      size={70}
      shadow={4}
      borderWidth={5}
      rounded="full"
      alignItems="center"
      borderColor="white"
      justifyContent="center"
    >
      {avatar ? (
        <Avatar size={60} source={{ uri: avatar }} />
      ) : (
        <Icon size={10} as={Ionicons} name="person-outline" />
      )}
    </Box>
  );
};

export default UserAvatar;
