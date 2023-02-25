import { FC } from 'react';
import { Alert, Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { HStack, Spinner, Text, ZStack, useColorModeValue } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useI18n, useUserContext } from '@/hooks';
import { ScreenLayout } from '@/shared/components/atoms';
import { BtnLanguage, BtnThemeSwitch } from '@/shared/components/molecules';
import { User } from '@/types/models';
import { Form } from './ui';

const SignUp: FC = () => {
  const navigation = useNavigation();
  const { register, isLoading } = useUserContext();
  const { i18n } = useI18n();

  const submitForm = (user: Omit<User, '_id'>) => {
    Keyboard.dismiss();

    register(user).catch((error) => {
      console.log(error);
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
              {i18n.auth.AlreadyHaveAccount}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text textAlign="center" color={useColorModeValue('coolGray.900', 'coolGray.200')}>
                {i18n.Login}
              </Text>
            </TouchableOpacity>
          </HStack>

          <HStack justifyContent="center" mt={6} space="xl">
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

export default SignUp;
