import React, { FC } from 'react';
import { Button, Icon, Text, View, useColorModeValue } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { InputPassword, InputText } from '@/shared/components/molecules';
import { User } from '@/types/models';

interface Props {
  submitStep: (field: Partial<User>) => void;
}

const EMAIL_REGEXP = /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;

type FormData = { email: string; password: string };

const FormStep1: FC<Props> = ({ submitStep }) => {
  const { handleSubmit, control } = useForm<FormData>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<FormData> = submitStep;

  return (
    <View>
      <Text fontSize="md" fontWeight="bold" mb={1}>
        Привет 👋
      </Text>

      <Text fontSize="sm" color="coolGray.400">
        Для регистрации пройди несколько шагов,
      </Text>

      <Text fontSize="sm" color="coolGray.400" mb={4}>
        Это займет пару минут ✌️
      </Text>

      <Controller
        control={control}
        name="email"
        rules={{
          pattern: {
            value: EMAIL_REGEXP,
            message: 'Недопустимый Email',
          },
          required: 'Поле обязательно',
        }}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <InputText
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            label="Укажи email"
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
            message: 'Пароль должен быть не менее 6 символов',
          },
          required: 'Поле обязательно',
        }}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <InputPassword
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            label="Придумай пароль"
            placeholder="не менее 6 символов"
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
