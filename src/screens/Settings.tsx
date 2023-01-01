import { FC, ReactNode } from 'react';
import { Text, View } from 'react-native';

interface Props {
  children?: ReactNode;
}

const Settings: FC<Props> = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
