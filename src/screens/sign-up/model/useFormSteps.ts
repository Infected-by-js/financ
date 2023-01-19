import { useState } from 'react';
import { LayoutAnimation } from 'react-native';

export default () => {
  const [step, setStep] = useState(1);

  // TODO: Change to reanimated animation
  const toNextStep = () => {
    LayoutAnimation.easeInEaseOut();
    setStep((prev) => prev + 1);
  };

  // TODO: Change to reanimated animation
  const toPrevStep = () => {
    LayoutAnimation.easeInEaseOut();
    setStep((prev) => prev - 1);
  };

  return {
    step,
    toNextStep,
    toPrevStep,
  };
};
