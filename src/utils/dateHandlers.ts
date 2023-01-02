import dayjs from 'dayjs';

export const toTime = (date: Date | string) => {
  const pattern = 'HH:mm';
  return dayjs(date).format(pattern);
};
