import { FC, useEffect } from 'react';
import { Box, Center, Spinner, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useUserContext } from '@/hooks';
import { ScreenLayout } from '@/shared/components/atoms';
import UserAvatar from '../entrance-with-code/ui/UserAvatar';

const Entrance: FC = () => {
  const { user } = useUserContext();
  const navigation = useNavigation();

  useEffect(() => {
    // TODO: GET user operations
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <ScreenLayout safeArea>
      <Box mt={20} alignItems="center">
        <UserAvatar avatar={user?.avatar} />

        <Text fontSize="xl" fontWeight="bold">
          Добро пожаловать, {user?.name}!
        </Text>
      </Box>
      <Center flex={1}>
        <Spinner size="lg" />
      </Center>
    </ScreenLayout>
  );
};

export default Entrance;
