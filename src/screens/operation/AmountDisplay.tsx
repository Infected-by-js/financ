import { FC, ReactNode } from 'react';
import { Box, Center, HStack, Text } from 'native-base';

interface Props {
  value: string;
}

const AmountDisplay: FC<Props> = ({ value }) => {
  return (
    <Center flex={1}>
      <HStack justifyContent="center" borderBottomWidth={2} py={2} borderBottomColor="coolGray.300">
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
  );
};

export default AmountDisplay;
