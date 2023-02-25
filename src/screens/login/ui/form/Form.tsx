import React, { FC, ReactNode } from 'react';
import { Button, HStack, Text, View, useColorModeValue } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { useI18n } from '@/hooks';
import { InputPassword, InputText } from '@/shared/components/molecules';
import { EMAIL_REGEXP } from '@/shared/constants/string';

interface Props {
  children?: ReactNode;
  onSubmit: (email: string, password: string) => void;
}

type FormData = { email: string; password: string };

const Form: FC<Props> = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm<FormData>({ mode: 'onBlur' });
  const { i18n } = useI18n();

  const submitForm = (data: FormData) => onSubmit(data.email, data.password);

  return (
    <View mx={10}>
      <HStack mb={6} alignItems="center" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          {i18n.auth.Login}
        </Text>
      </HStack>

      <View>
        <Text fontSize="md" fontWeight="bold" mb={1}>
          {i18n.Hello} 👋
        </Text>

        <Text fontSize="sm" color="coolGray.400" mb={4}>
          {i18n.auth.EnterLoginDetails} 🚀
        </Text>

        <Controller
          control={control}
          name="email"
          rules={{
            pattern: {
              value: EMAIL_REGEXP,
              message: i18n.validation.InvalidEmail,
            },
            required: i18n.validation.FieldRequired,
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
              message: `${i18n.validation.PassAtLeast} 6 ${i18n.validation.symbols}`,
            },
            required: i18n.validation.FieldRequired,
          }}
          render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
            <InputPassword
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label={i18n.Password}
              placeholder={i18n.validation.EnterPass}
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
          <Text color={useColorModeValue('coolGray.100', 'coolGray.900')}>{i18n.auth.Enter}</Text>
        </Button>
      </View>
    </View>
  );
};

export default Form;
