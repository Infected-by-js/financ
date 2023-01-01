import { FC, ReactNode } from 'react';
import { Box, Center, HStack, Icon, Text, VStack } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUser } from '@/fixtures/dummy';

interface Props {
  children?: ReactNode;
}

const Main: FC<Props> = () => {
  const user = getUser();

  return (
    <SafeAreaView>
      <HStack justifyContent={'space-between'} px={4}>
        <Box>
          <Text fontSize={24}>Привет, </Text>
          <Text fontSize={26} fontWeight="bold">
            {user.name}
          </Text>
        </Box>
        <Box>
          <Feather name="plus" size={40} />
        </Box>
      </HStack>
    </SafeAreaView>
  );
};

export default Main;
