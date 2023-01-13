import { FC, ReactNode } from 'react';
import { Text, View } from 'react-native';

interface Props {
  children?: ReactNode;
}

const Login: FC<Props> = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
