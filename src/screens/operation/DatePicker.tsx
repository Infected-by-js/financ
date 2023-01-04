import { FC, ReactNode } from 'react';
import { Text } from 'native-base';
import { toTime } from '@/utils';

interface Props {
  children?: ReactNode;
}

const DatePicker: FC<Props> = () => {
  return (
    <Text color="coolGray.400" fontSize="md" fontWeight="semibold">
      Сегодня - {toTime(new Date())}
    </Text>
  );
};

export default DatePicker;
