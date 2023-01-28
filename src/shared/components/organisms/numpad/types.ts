export type ActionType = 'insert' | 'delete' | 'separate';

export interface KeyType {
  actionType: ActionType;
  value: string;
}

export interface NumPadProps {
  onItemClick: (key: KeyType) => void;
  hideSeparator?: boolean;
}
