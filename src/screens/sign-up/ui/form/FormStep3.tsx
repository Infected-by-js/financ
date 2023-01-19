import { FC, useMemo, useState } from 'react';
import { Button, HStack, Icon, Switch, Text, View, useColorModeValue } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { InputOTP } from '@/shared/components/molecules';
import { User } from '@/types/models';

interface Props {
  submitStep: (field: Partial<User>) => void;
  backToPrevStep: () => void;
}

const PASSWORD_LENGTH = 4;

const FormStep3: FC<Props> = ({ backToPrevStep, submitStep }) => {
  const [isNeedPassword, setIsNeedPassword] = useState(false);
  const [passwordShort, setPasswordShort] = useState<string | null>(null);

  const togglePassword = () => {
    if (isNeedPassword) setPasswordShort(null);

    setIsNeedPassword((prev) => !prev);
  };

  const isSubmitDisabled = useMemo(() => {
    return isNeedPassword && passwordShort?.length !== PASSWORD_LENGTH;
  }, [isNeedPassword, passwordShort]);

  return (
    <View>
      <Text fontSize="md" fontWeight="bold" mb={1}>
        Последний штрих 🏁
      </Text>

      <Text fontSize="sm" color="coolGray.400" mb={4}>
        Больше паролей богу паролей😅
      </Text>

      <Text fontSize="sm" fontWeight="bold" mb={1}>
        Добавить короткий пароль при входе?
      </Text>
      <Switch isChecked={isNeedPassword} onToggle={togglePassword} mb={6} />

      {isNeedPassword && (
        <InputOTP
          onChange={setPasswordShort}
          password={passwordShort}
          passwordLength={PASSWORD_LENGTH}
        />
      )}

      <HStack justifyContent="space-between" mt={10}>
        <Button
          onPress={backToPrevStep}
          borderColor={useColorModeValue('coolGray.800', 'coolGray.300')}
          _pressed={{ bg: 'coolGray.500' }}
          mr={8}
          flex={1}
          variant="outline"
        >
          <Icon
            as={Ionicons}
            name="arrow-back"
            color={useColorModeValue('coolGray.900', 'coolGray.100')}
          />
        </Button>

        <Button
          isDisabled={isSubmitDisabled}
          onPress={() => submitStep({ passwordShort })}
          bg={'primary.500'}
          _pressed={{ bg: 'primary.400' }}
          flex={1}
        >
          Стартуем 🚀
        </Button>
      </HStack>
    </View>
  );
};

export default FormStep3;
