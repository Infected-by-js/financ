export type Currency = 'RUB';
export type OperationType = 'deposit' | 'withdraw';

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  passwordShort: string | null;
  avatar: string | null;
}

export interface Group {
  _id: string;
  userId: string;
  icon: string;
  name: string;
  desription: string | null;
}

export interface Pouch {
  _id: string;
  userId: string;
  name: string;
  balance: number;
  description: string | null;
  currency: Currency;
}

export interface Operation {
  _id: string;
  groupId: string;
  userId: string;
  pouchId: string;
  description: string | null;
  type: OperationType;
  amount: number;
  date: Date | string;
}
