import { FC, ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'native-base';

interface Props {
  children?: ReactNode;
}

const NoteInput: FC<Props> = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Text color="coolGray.400" fontSize="md">
        Добавить заметку
      </Text>
    </TouchableOpacity>
  );
};

export default NoteInput;
