import { Group, Operation, Pouch, User } from '../shared/types/models';

const user: User = {
  _id: 'f7ace532-582a-4edf-88ff-621430d9de33',
  avatar: null,
  email: 'test@test.test',
  name: 'Кристина',
  password: 'test@test.test',
  shortPassword: 1234,
};

const groups: Group[] = [
  {
    _id: '1',
    userId: user._id,
    icon: '🎁',
    name: 'Подарки',
    desription: null,
  },
  {
    _id: '2',
    icon: '🛍️',
    name: 'Магазин',
    userId: user._id,
    desription: 'Чаще всего это просто покупки напитков',
  },
  {
    _id: '3',
    icon: '🎉',
    name: 'Зарплата',
    userId: user._id,
    desription: null,
  },
  {
    _id: '4',
    icon: '💅',
    name: 'Процедуры',
    userId: user._id,
    desription: null,
  },
  {
    _id: '5',
    icon: '🍟',
    name: 'Доставка еды',
    userId: user._id,
    desription: null,
  },
];

const pouches: Pouch[] = [
  {
    _id: '1',
    userId: user._id,
    name: 'Credit card',
    description: '1111 2222 3333 4444',
    balance: 9000,
    currency: 'RUB',
  },
];

const operations: Operation[] = [
  {
    _id: '1',
    pouchId: '1',
    groupId: '3',
    userId: user._id,
    type: 'deposit',
    description: null,
    amount: 10000,
    date: '2022-12-30T13:53:44.639Z',
  },
  {
    _id: '2',
    pouchId: '1',
    groupId: '1',
    userId: user._id,
    amount: 1000,
    date: '2022-12-31T13:53:44.639Z',
    type: 'withdraw',
    description: 'Оставшиеся подарки к новому году',
  },
  {
    _id: '3',
    pouchId: '1',
    groupId: '2',
    userId: user._id,
    amount: 500,
    date: '2022-12-31T13:13:44.639Z',
    type: 'withdraw',
    description: 'Энергетики',
  },
];

export const getUser = () => user;
export const getUserPouches = () => pouches;
export const getUserGroups = () => groups;
export const getPouchOperations = () => operations;
