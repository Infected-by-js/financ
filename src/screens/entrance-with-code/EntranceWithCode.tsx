import { FC, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Box, Button, Icon, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useUserContext } from '@/hooks';
import { ScreenLayout } from '@/shared/components/atoms';
import { KeyType, Numpad } from '@/shared/components/organisms/numpad';
import InputCode from './ui/InputCode';
import UserAvatar from './ui/UserAvatar';

const CODE_LENGTH = 4;

const EntranceWithCode: FC = () => {
  const [code, setCode] = useState<string[]>([]);
  const { user } = useUserContext();
  const navigator = useNavigation();

  const enterCode = (key: KeyType) => {
    if (key.actionType === 'delete') {
      setCode((prev) => prev.slice(0, prev.length - 1));
      return;
    }

    if (code.length === CODE_LENGTH) return;

    setCode((prev) => [...prev, key.value]);
  };

  useEffect(() => {
    if (code.length === CODE_LENGTH) {
      const password = code.join('');

      if (password === user?.passwordShort) {
        // TODO: GET user operations
        navigator.navigate('Home');
        return;
      }

      Alert.alert('Неправильный пароль');
      setCode([]);
    }
  }, [code]);

  return (
    <ScreenLayout safeArea>
      <Box mt={20} alignItems="center">
        <UserAvatar avatar={user?.avatar} />

        <Text fontSize="2xl" fontWeight="bold">
          Привет, {user?.name}! 👋
        </Text>
      </Box>

      <Button
        variant="link"
        alignSelf="center"
        fontSize="md"
        fontWeight="bold"
        colorScheme="amber"
        p={1}
        rightIcon={<Icon as={Ionicons} name="arrow-forward" size="sm" />}
      >
        Восстановить пароль?
      </Button>

      <InputCode code={code} codeLength={CODE_LENGTH} />

      <Numpad onItemClick={enterCode} hideSeparator />
    </ScreenLayout>
  );
};

export default EntranceWithCode;
