import { FC, ReactNode } from 'react';
import { Text, View } from 'react-native';

interface Props {
  children?: ReactNode;
}

const Loader: FC<Props> = () => {
  return (
    <View>
      <Text>Loader</Text>
    </View>
  );
};

export default Loader;
