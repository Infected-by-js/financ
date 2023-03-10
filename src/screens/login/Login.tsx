import { FC, ReactNode } from 'react';
import { Alert, Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { HStack, Spinner, Text, ZStack, useColorModeValue } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useI18n, useUserContext } from '@/hooks';
import { ScreenLayout } from '@/shared/components/atoms';
import { BtnLanguage, BtnThemeSwitch } from '@/shared/components/molecules';
import { Form } from './ui';

interface Props {
  children?: ReactNode;
}

const Login: FC<Props> = () => {
  const navigation = useNavigation();
  const { isLoading, login } = useUserContext();
  const { i18n } = useI18n();

  const submitForm = (email: string, password: string) => {
    Keyboard.dismiss();

    login(email, password).catch((error) => {
      const msg = (i18n.errors as any)[error.code];

      if (msg) Alert.alert(msg);
      else Alert.alert(i18n.errors.NonExpected);
    });
  };

  return (
    <ZStack>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScreenLayout safeArea justifyContent="center">
          <Form onSubmit={submitForm} />

          <HStack justifyContent="center" mt={6}>
            <Text textAlign="center" mr={2} color="coolGray.400">
              {i18n.auth.NoAccount}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text textAlign="center" color={useColorModeValue('coolGray.900', 'coolGray.200')}>
                {i18n.auth.Register}
              </Text>
            </TouchableOpacity>
          </HStack>

          <HStack justifyContent="center" mt={6} mx={10} space="xl">
            <BtnThemeSwitch />
            <BtnLanguage />
          </HStack>
        </ScreenLayout>
      </TouchableWithoutFeedback>

      {isLoading && (
        <Spinner w="full" h="full" position="fixed" bg="coolGray.50" opacity={60} size="lg" />
      )}
    </ZStack>
  );
};

export default Login;
