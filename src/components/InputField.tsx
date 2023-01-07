import React, { FC, ReactNode } from 'react';
import {
  FormControl,
  IFormControlProps,
  Text,
  WarningOutlineIcon,
  useColorModeValue,
} from 'native-base';

export interface InputFormProps extends IFormControlProps {
  label: string;
  errorMessage?: string;
  children?: ReactNode;
}

const InputField: FC<InputFormProps> = (props) => {
  const { label, errorMessage, children, ...rest } = props;

  return (
    <FormControl {...rest}>
      <FormControl.Label>
        <Text fontWeight="bold" color={useColorModeValue('coolGray.800', 'coolGray.300')}>
          {label}
        </Text>
      </FormControl.Label>

      {children}

      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default InputField;
