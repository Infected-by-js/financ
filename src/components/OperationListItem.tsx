import { FC } from 'react';
import { Box, Center, HStack, Text, VStack, useColorModeValue } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Operation } from '@/fixtures/types';
import { toCurrency, toTime } from '@/utils';

interface Props {
  operation: Operation;
  groupIcon: string;
}

const OperationListItem: FC<Props> = ({ operation, groupIcon }) => {
  return (
    <HStack w="full" mb={4} alignItems="center">
      <Center size="12" mr={1}>
        <Text fontSize="3xl">{groupIcon}</Text>
      </Center>

      <HStack
        py={2}
        flex={1}
        justifyContent="space-between"
        borderBottomColor="coolGray.300"
        borderBottomWidth={1}
      >
        <VStack w="1/2">
          <Text color={useColorModeValue('coolGray.800', 'coolGray.100')} bold>
            {operation.title}
          </Text>
          <Text fontSize="xs" color="coolGray.400">
            {operation.description || '-'}
          </Text>
        </VStack>

        <VStack alignItems="flex-end">
          <Text
            color={
              operation.type === 'deposit'
                ? 'success.500'
                : useColorModeValue('coolGray.800', 'coolGray.100')
            }
            bold
          >
            {toCurrency(operation.amount, true)}
          </Text>

          <Box>
            <Text
              fontSize="xs"
              color={operation.type === 'deposit' ? 'success.500' : 'coolGray.400'}
            >
              {toTime(operation.date)} <Ionicons name="time-outline" />
            </Text>
          </Box>
        </VStack>
      </HStack>
    </HStack>
  );
};

export default OperationListItem;
