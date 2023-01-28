import { FC, ReactNode } from 'react';
import { Button, Heading } from 'native-base';
import { useUserContext } from '@/hooks';
import { ScreenLayout } from '@/shared/components/atoms';
import { BtnThemeSwitch } from '@/shared/components/molecules';

interface Props {
  children?: ReactNode;
}

const Settings: FC<Props> = () => {
  const { logout } = useUserContext();

  return (
    <ScreenLayout safeAreaTop>
      <Heading>Settings</Heading>
      <BtnThemeSwitch />

      <Button onPress={logout}>Logout</Button>
    </ScreenLayout>
  );
};

export default Settings;
