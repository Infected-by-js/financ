import { FC } from 'react';
import { Center, HStack, Text, useColorModeValue } from 'native-base';

interface Props {
  password: string | string[];
  passwordLength: number;
}
const InputOTPOpenned: FC<Props> = ({ password, passwordLength }) => {
  const boxArray = new Array(passwordLength).fill(null);

  const InputBox = (_: string, index: number) => {
    const emptyInput = '';
    const digit = password[index] || emptyInput;

    const isCurrentValue = index === password.length;

    return (
      <Center
        key={index}
        borderColor={
          isCurrentValue ? useColorModeValue('coolGray.800', 'coolGray.100') : 'coolGray.300'
        }
        borderWidth={2}
        rounded="xl"
        p={2}
        w={60}
        h={60}
      >
        <Text fontSize="2xl" fontWeight="bold">
          {digit}
        </Text>
      </Center>
    );
  };

  return (
    <HStack w="full" justifyContent="space-evenly" px={8} my={12}>
      {boxArray.map(InputBox)}
    </HStack>
  );
};

export default InputOTPOpenned;
