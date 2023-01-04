import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'native-base';

interface Props {
  text: string;
  icon: string;
  onPress: () => void
}

const ButtonWithIcon: FC<Props> = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text color="coolGray.500" fontSize="md" fontWeight="semibold">
        {icon} {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
