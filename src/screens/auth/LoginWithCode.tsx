import { FC, ReactNode } from 'react';
import { Text, View } from 'react-native';

interface Props {
  children?: ReactNode;
}

const LoginWithCode: FC<Props> = () => {
  return (
    <View>
      <Text>LoginWithCode</Text>
    </View>
  );
};

export default LoginWithCode;
