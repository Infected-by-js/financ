import React, { FC } from 'react';
import { Button, Icon, Text, View, useColorModeValue } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useI18n } from '@/hooks';
import { InputPassword, InputText } from '@/shared/components/molecules';
import { EMAIL_REGEXP } from '@/shared/constants/string';
import { User } from '@/types/models';

interface Props {
  submitStep: (field: Partial<User>) => void;
}

type FormData = { email: string; password: string };

const FormStep1: FC<Props> = ({ submitStep }) => {
  const { handleSubmit, control } = useForm<FormData>({ mode: 'onBlur' });
  const { i18n } = useI18n();

  const onSubmit: SubmitHandler<FormData> = submitStep;

  return (
    <View>
      <Text fontSize="md" fontWeight="bold" mb={1}>
        {i18n.Hello} 👋
      </Text>

      <Text fontSize="sm" color="coolGray.400">
        {i18n.auth.RegisterPreparation}
      </Text>

      <Text fontSize="sm" color="coolGray.400" mb={4}>
        {i18n.auth.FewMinutes} ✌️
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
            label={i18n.auth.EnterEmail}
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
            label={i18n.auth.EnterPassword}
            placeholder={i18n.validation.EnterPass}
            errorMessage={error?.message}
            isInvalid={!!error?.message}
            mb={8}
          />
        )}
      />

      <Button
        onPress={handleSubmit(onSubmit)}
        bg={useColorModeValue('coolGray.800', 'coolGray.200')}
        mb={4}
        _pressed={{ bg: 'coolGray.600' }}
      >
        <Icon
          as={Ionicons}
          name="arrow-forward"
          color={useColorModeValue('coolGray.100', 'coolGray.900')}
        />
      </Button>
    </View>
  );
};

export default FormStep1;
