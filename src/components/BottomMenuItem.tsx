import { FC } from 'react';
import { Icon, Pressable } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  isActive: boolean;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

const BottomMenuItem: FC<Props> = ({ onPress, icon, isActive }) => {
  return (
    <Pressable onPress={onPress} p={2}>
      <Icon
        as={Ionicons}
        color="primary.600"
        size="lg"
        name={isActive ? icon : `${icon}-outline`}
      />
    </Pressable>
  );
};

export default BottomMenuItem;
