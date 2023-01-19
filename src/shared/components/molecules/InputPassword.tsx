import React, { FC, memo, useState } from 'react';
import { Icon, Input, Pressable, useColorModeValue } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { InputField, InputFieldProps } from '@/shared/components/atoms';

interface Props extends InputFieldProps {
  value: any;
  onChange: (value: string) => void;
  onBlur: (value: any) => void;
  placeholder: string;
}

const InputPassword: FC<Props> = memo((props) => {
  const { label, value, errorMessage, onChange, onBlur, placeholder, ...rest } = props;
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <InputField errorMessage={errorMessage} label={label} {...rest}>
      <Input
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        size="md"
        color={useColorModeValue('coolGray.800', 'coolGray.300')}
        secureTextEntry={!isShowPassword}
        placeholderTextColor="coolGray.500"
        autoCapitalize="none"
        autoCorrect={false}
        variant="outline"
        _focus={{
          bg: 'transparent',
          borderColor: useColorModeValue('coolGray.800', 'coolGray.300'),
        }}
        InputRightElement={
          <Pressable onPress={() => setIsShowPassword(!isShowPassword)}>
            <Icon
              as={<Ionicons name={isShowPassword ? 'eye' : 'eye-off'} />}
              size="lg"
              mr="2"
              color="muted.600"
            />
          </Pressable>
        }
      />
    </InputField>
  );
});

export default InputPassword;
