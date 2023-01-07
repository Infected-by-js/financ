import { FC, ReactNode, useEffect } from 'react';
import { Box, HStack, ScrollView, Text, VStack, View, useColorModeValue } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import OperationListItem from '@/components/OperationListItem';
import { getItem } from '@/shared/libs/persistenceStorage';
import { Group, Operation } from '@/shared/types/models';
import { toCurrency } from '@/shared/utils';
import { getPouchOperations, getUserGroups } from '@/fixtures/dummy';
import { useAuth } from '../../hooks/useAuth';
import BalanceBanner from './BalanceBanner';
import Header from './Header';

interface Props {
  children?: ReactNode;
}

const sumOfOperations = (operations: Operation[], type?: string) => {
  if (type) {
    return operations.reduce((acc, item) => {
      return item.type === type ? acc + item.amount : acc;
    }, 0);
  }

  return operations.reduce((acc, item) => {
    return item.type === 'deposit' ? acc + item.amount : acc - item.amount;
  }, 0);
};

const getGroupByOperationId = (groups: Group[], operationId: string): Group | null => {
  return groups.find((group) => operationId === group._id) || null;
};

const Home: FC<Props> = () => {
  const { user } = useAuth();
  const operations = getPouchOperations();
  const groups = getUserGroups();
  const navigation = useNavigation();

  const getGroupIcon = (id: string) => {
    const group = getGroupByOperationId(groups, id);
    return group ? group.icon : ' ';
  };

  useEffect(() => {
    getItem('user').then((data) => console.log(data));
  }, []);

  return (
    <VStack
      safeAreaTop
      w="full"
      h="full"
      pt={4}
      px={4}
      bg={useColorModeValue('coolGray.100', 'coolGray.800')}
    >
      <Header user={user} onPress={() => navigation.navigate('Operation')} />
      <BalanceBanner operations={operations} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View mb={8}>
          <Box ml="12" mb={2}>
            <HStack
              pb={2}
              justifyContent="space-between"
              borderBottomColor="coolGray.300"
              borderBottomWidth={1}
            >
              <Text color="coolGray.400"> Сегодня </Text>
              <Text color="coolGray.400">{toCurrency(sumOfOperations(operations))} ₽</Text>
            </HStack>
          </Box>

          {operations.map((operation) => (
            <OperationListItem
              groupIcon={getGroupIcon(operation.groupId)}
              operation={operation}
              key={operation._id}
            />
          ))}
        </View>
      </ScrollView>
    </VStack>
  );
};

export default Home;
