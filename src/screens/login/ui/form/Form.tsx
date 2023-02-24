import React, { FC, ReactNode } from 'react';
import { Button, HStack, Text, View, useColorModeValue } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { useLocalization } from '@/hooks';
import { InputPassword, InputText } from '@/shared/components/molecules';
import { EMAIL_REGEXP } from '@/shared/constants/string';

interface Props {
  children?: ReactNode;
  onSubmit: (email: string, password: string) => void;
}

type FormData = { email: string; password: string };

const Form: FC<Props> = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm<FormData>({ mode: 'onBlur' });
  const { strings } = useLocalization();

  const submitForm = (data: FormData) => onSubmit(data.email, data.password);

  return (
    <View mx={10}>
      <HStack mb={6} alignItems="center" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          {strings.auth.Login}
        </Text>
      </HStack>

      <View>
        <Text fontSize="md" fontWeight="bold" mb={1}>
          {strings.Hello} 👋
        </Text>

        <Text fontSize="sm" color="coolGray.400" mb={4}>
          {strings.auth.EnterLoginDetails} 🚀
        </Text>

        <Controller
          control={control}
          name="email"
          rules={{
            pattern: {
              value: EMAIL_REGEXP,
              message: strings.validation.InvalidEmail,
            },
            required: strings.validation.FieldRequired,
          }}
          render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
            <InputText
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label="Email"
              placeholder="email@example.com"
              errorMessage={error?.message}
              isInvalid={!!error?.message}
              mb={4}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            minLength: {
              value: 6,
              message: `${strings.validation.PassAtLeast} 6 ${strings.validation.symbols}`,
            },
            required: strings.validation.FieldRequired,
          }}
          render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
            <InputPassword
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label={strings.Password}
              placeholder={strings.validation.EnterPass}
              errorMessage={error?.message}
              isInvalid={!!error?.message}
              mb={8}
            />
          )}
        />

        <Button
          onPress={handleSubmit(submitForm)}
          bg={useColorModeValue('coolGray.800', 'coolGray.200')}
          mb={4}
          _pressed={{ bg: 'coolGray.600' }}
        >
          <Text color={useColorModeValue('coolGray.100', 'coolGray.900')}>
            {strings.auth.Enter}
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default Form;
