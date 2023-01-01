import { FC, ReactNode } from 'react';
import { Text, View } from 'react-native';

interface Props {
  children?: ReactNode;
}

const History: FC<Props> = () => {
  return (
    <View>
      <Text>History</Text>
    </View>
  );
};

export default History;
