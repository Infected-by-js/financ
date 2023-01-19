import { FC, ReactNode } from 'react';
import { Text } from 'react-native';
import { ScreenLayout } from '@/shared/components/atoms';

interface Props {
  children?: ReactNode;
}

const EntranceWithCode: FC<Props> = () => {
  return (
    <ScreenLayout safeAreaX safeAreaTop>
      <Text>EntranceWithCode</Text>
    </ScreenLayout>
  );
};

export default EntranceWithCode;
