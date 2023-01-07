import { FC, memo } from 'react';
import { Input, useColorModeValue } from 'native-base';
import InputField, { InputFormProps } from './InputField';

interface Props extends InputFormProps {
  value: any;
  onChange: (value: string) => void;
  onBlur?: (value: any) => void;
  placeholder: string;
}

const InputText: FC<Props> = memo((props) => {
  const { label, value, errorMessage, onChange, onBlur, placeholder, ...rest } = props;

  return (
    <InputField errorMessage={errorMessage} label={label} {...rest}>
      <Input
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        size="md"
        color={useColorModeValue('coolGray.800', 'coolGray.300')}
        placeholderTextColor="coolGray.500"
        autoCapitalize="none"
        autoCorrect={false}
        variant="outline"
        _focus={{
          bg: 'transparent',
          borderColor: useColorModeValue('coolGray.800', 'coolGray.300'),
        }}
      />
    </InputField>
  );
});

export default InputText;
