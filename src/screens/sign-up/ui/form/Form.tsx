import { FC, useState } from 'react';
import { Keyboard } from 'react-native';
import { HStack, Text, View } from 'native-base';
import { useLocalization } from '@/hooks';
import { User } from '@/types/models';
import { useFormSteps } from '../../model';
import Step1 from './FormStep1';
import Step2 from './FormStep2';
import Step3 from './FormStep3';

interface Props {
  onSubmit: (user: Omit<User, '_id'>) => void;
}

const Form: FC<Props> = ({ onSubmit }) => {
  const [user, setUser] = useState<User>({} as User);
  const { step, toNextStep, toPrevStep } = useFormSteps();
  const { strings } = useLocalization();

  const handleNextStep = (fields: Partial<User>) => {
    Keyboard.dismiss();
    setUser((prev) => ({ ...prev, ...fields }));
    toNextStep();
  };

  const handleSubmitForm = (fields: Partial<User>) => {
    Keyboard.dismiss();
    onSubmit({ ...user, ...fields });
  };

  return (
    <View mx={10}>
      <HStack mb={6} alignItems="center" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          {strings.Register}
        </Text>
        <Text fontSize="sm" fontWeight="bold">
          {strings.Step} {step} / 3
        </Text>
      </HStack>

      {step === 1 && <Step1 submitStep={handleNextStep} />}
      {step === 2 && (
        <Step2
          submitStep={handleNextStep}
          backToPrevStep={toPrevStep}
          initName={user.name || user.email}
          initAvatar={user.avatar}
        />
      )}
      {step === 3 && <Step3 submitStep={handleSubmitForm} backToPrevStep={toPrevStep} />}
    </View>
  );
};

export default Form;
