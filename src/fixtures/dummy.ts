import { Group, Pouch, User } from '../types/models';

const user: User = {
  _id: 'f7ace532-582a-4edf-88ff-621430d9de33',
  avatar: null,
  email: 'test@test.test',
  name: 'Кристина',
  password: 'test@test.test',
  passwordShort: '1234',
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

const operations = [
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

const expectedResponse = [
  {
    date: '2022-12-31',
    amount: 1500,
    operations: [
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
    ],
  },
];

export const getUser = () => user;
export const getUserPouches = () => pouches;
export const getUserGroups = () => groups;
export const getPouchOperations = () => operations;

// const groupOperationsByDate = (operations) => {
//   const groupedOperations = operations.reduce((acc, operation) => {
//     const date = new Date(operation.date).toLocaleDateString();

//     if (!acc[date]) {
//       acc[date] = {
//         date,
//         amount: 0,
//         operations: [],
//         _id: `${date}-${Math.random().toString(36).slice(2, 15)}`,
//       };
//     }

//     acc[date].amount += operation.amount;
//     acc[date].operations.push(operation);
//     return acc;
//   }, {});

//   return Object.values(groupedOperations);
// };

// const filterOperationsByPeriod = (operations, from, to) => {
//   return groupOperationsByDate(operations).filter((operationByDay) => {
//     const operationDay = new Date(operationByDay.date);
//     return operationDay >= from && operationDay <= to;
//   });
// };

// export const getOperationsByPeriod = ({ from, to }) => {
//   return filterOperationsByPeriod(operations, from, to);
// };
