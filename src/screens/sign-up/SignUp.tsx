import { FC } from 'react';
import { Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { HStack, Spinner, Text, ZStack, useColorModeValue } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useLocalization, useUserContext } from '@/hooks';
import { ScreenLayout } from '@/shared/components/atoms';
import { BtnLanguage, BtnThemeSwitch } from '@/shared/components/molecules';
import { Form } from './ui';

const SignUp: FC = () => {
  const navigation = useNavigation();
  const { register, isLoading } = useUserContext();
  const { strings } = useLocalization();

  const onSubmitForm = register;

  return (
    <ZStack>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScreenLayout safeArea justifyContent="center">
          <Form onSubmit={onSubmitForm} />

          <HStack justifyContent="center" mt={6}>
            <Text textAlign="center" mr={2} color="coolGray.400">
              {strings.auth.AlreadyHaveAccount}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text textAlign="center" color={useColorModeValue('coolGray.900', 'coolGray.200')}>
                {strings.Login}
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
