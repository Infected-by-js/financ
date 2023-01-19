import { FC, ReactNode } from 'react';
import { Heading } from 'native-base';
import { ScreenLayout } from '@/shared/components/atoms';
import { BtnThemeSwitch } from '@/shared/components/molecules';

interface Props {
  children?: ReactNode;
}

const Settings: FC<Props> = () => {
  return (
    <ScreenLayout safeAreaTop>
      <Heading>Settings</Heading>
      <BtnThemeSwitch />
    </ScreenLayout>
  );
};

export default Settings;
