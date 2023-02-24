import dayjs from 'dayjs';
import { capitalize } from './string';

export const toTime = (date: Date | string) => {
  const pattern = 'HH:mm';
  return dayjs(date).format(pattern);
};

type DateName =
  | 'Сегодня'
  | 'Вчера'
  | 'Понедельник'
  | 'Вторник'
  | 'Среда'
  | 'Четверг'
  | 'Пятница'
  | 'Суббота'
  | 'Воскресенье'
  | string;

export const getDatesName = (date: Date | string): DateName => {
  const DAY_IN_MS = 1000 * 60 * 60 * 24;
  const currentDate = Date.now();
  const differenceInDays = Math.floor((currentDate - new Date(date).getTime()) / DAY_IN_MS);

  const diffs = [
    {
      condition: (d: number) => d === 0,
      value: 'Сегодня',
    },
    {
      condition: (d: number) => d === 1,
      value: 'Вчера',
    },
    {
      condition: (d: number) => d >= 2 && d <= 6,
      value: capitalize(new Date(date).toLocaleString('ru', { weekday: 'long' })),
    },
  ];

  return diffs.reduce((acc, item) => {
    return item.condition(differenceInDays) ? item.value : acc;
  }, new Date(date).toLocaleDateString());
};
