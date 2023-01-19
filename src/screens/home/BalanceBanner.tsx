import { FC } from 'react';
import { Box, Center, HStack, ScrollView, Text } from 'native-base';
import { toCurrency } from '@/shared/utils';
import { Operation } from '@/types/models';

interface Props {
  operations: Operation[];
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

const BalanceBanner: FC<Props> = ({ operations }) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ width: '200%' }}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      pagingEnabled={true}
      h="1/4"
      my={3}
    >
      <Center flex={1}>
        <Text fontSize="md" color="coolGray.400">
          Затраты на этой неделе
        </Text>

        <HStack justifyContent="center">
          <Box>
            <Text fontSize="6xl" fontWeight="medium" lineHeight="sm">
              {toCurrency(sumOfOperations(operations, 'withdraw'))}
            </Text>
          </Box>
          <Box>
            <Text fontSize="4xl" lineHeight="sm" color="coolGray.400">
              ₽
            </Text>
          </Box>
        </HStack>
      </Center>

      <Center flex={1}>
        <Text fontSize="md" color="coolGray.400">
          Пополнения на этой неделе
        </Text>

        <HStack justifyContent="center">
          <Box>
            <Text fontSize="6xl" fontWeight="medium" lineHeight="sm">
              {toCurrency(sumOfOperations(operations, 'deposit'))}
            </Text>
          </Box>
          <Box>
            <Text fontSize="4xl" lineHeight="sm" color="coolGray.400">
              ₽
            </Text>
          </Box>
        </HStack>
      </Center>
    </ScrollView>
  );
};

export default BalanceBanner;
