import { useState } from 'react';
import {
  Keyboard,
  LayoutAnimation,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { HStack, Spinner, Text, VStack, ZStack, useColorModeValue } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import ThemeToggle from '@/components/ThemeToggle';
import { User } from '@/shared/types/models';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { useAuth } from '@/hooks';

const SignUp = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<User>({} as User);
  const [step, setStep] = useState(1);
  const { register, isLoading } = useAuth();

  const submitStep = (fields: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...fields }));
    LayoutAnimation.easeInEaseOut();
    setStep((prev) => prev + 1);
  };

  const backToPrevStep = () => {
    LayoutAnimation.easeInEaseOut();
    setStep((prev) => prev - 1);
  };

  const submitSignUp = (passwordShort: Partial<User>) => {
    register({ ...user, ...passwordShort });
  };

  return (
    <ZStack>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <VStack
          safeArea
          justifyContent="center"
          w="full"
          h="full"
          bg={useColorModeValue('coolGray.100', 'coolGray.800')}
        >
          <HStack mb={6} mx={12} alignItems="center" justifyContent="space-between">
            <Text fontSize="2xl" fontWeight="bold">
              Регистрация
            </Text>
            <Text fontSize="sm" fontWeight="bold">
              Шаг {step} / 3
            </Text>
          </HStack>

          {step === 1 && <Step1 submitStep={submitStep} />}
          {step === 2 && (
            <Step2
              submitStep={submitStep}
              backToPrevStep={backToPrevStep}
              initName={user.name || user.email}
              initAvatar={user.avatar}
            />
          )}
          {step === 3 && <Step3 submitStep={submitSignUp} backToPrevStep={backToPrevStep} />}

          <HStack justifyContent="center" mt={6}>
            <Text textAlign="center" mr={2} color="coolGray.400">
              Уже есть аккаунт?
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text textAlign="center" color={useColorModeValue('coolGray.900', 'coolGray.200')}>
                Войти
              </Text>
            </TouchableOpacity>
          </HStack>

          <HStack justifyContent="center" mt={6}>
            <ThemeToggle />
          </HStack>
        </VStack>
      </TouchableWithoutFeedback>

      {isLoading && (
        <Spinner w="full" h="full" position="fixed" bg="coolGray.50" opacity={60} size="lg" />
      )}
    </ZStack>
  );
};

export default SignUp;
