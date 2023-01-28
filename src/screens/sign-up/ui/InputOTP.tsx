import { FC, useEffect, useRef } from 'react';
import { Center, Icon, Input, Pressable, VStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  password: string | null;
  passwordLength: number;
  onChange: (value: string) => void;
}

const InputOTP: FC<Props> = ({ password, onChange, passwordLength }) => {
  const inputRef = useRef<HTMLInputElement>();
  const boxArray = new Array(passwordLength).fill(null);

  const focusOnPassword = () => inputRef.current?.focus();

  useEffect(focusOnPassword, []);

  const InputBox = (_: null, index: number) => {
    const isCurrentValue = Number(index) === Number(password?.length ?? 0);
    const isLastValue = index === passwordLength - 1;
    const isCodeComplete = Number(password?.length) === passwordLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    if (!password?.[index]) {
      return (
        <Center key={index}>
          <Icon
            as={Ionicons}
            name="ellipse-outline"
            w="60"
            h="60"
            size="6xl"
            color={isValueFocused ? 'primary.900' : 'coolGray.400'}
          />
        </Center>
      );
    }

    return (
      <Center key={index}>
        <Icon as={Ionicons} name="checkmark-circle" size="6xl" w="60" h="60" color="primary.500" />
      </Center>
    );
  };

  return (
    <VStack w="full" justifyContent="space-evenly">
      <Pressable onPress={focusOnPassword} flexDir="row" justifyContent="space-evenly">
        {boxArray.map(InputBox)}
      </Pressable>

      <Input
        ref={inputRef}
        w="full"
        onChangeText={onChange}
        keyboardType="number-pad"
        display="none"
        maxLength={passwordLength}
      />
    </VStack>
  );
};

export default InputOTP;
