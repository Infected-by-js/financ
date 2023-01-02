import { useState } from 'react';
import { KeyType } from './types';

export const useNumpad = () => {
  const [amount, setAmount] = useState('0');

  const onSelect = ({ value, actionType }: KeyType) => {
    const pointIdx = amount.indexOf('.');

    const isNoPoint = pointIdx === -1;
    const isLast = pointIdx === amount.length - 1;
    const isPrevLast = pointIdx === amount.length - 2;

    switch (actionType) {
      case 'delete': {
        setAmount((prev) => (prev.length !== 1 ? prev.slice(0, prev.length - 1) : '0'));
        break;
      }

      case 'separate': {
        if (isNoPoint) setAmount((prev) => prev + value);
        break;
      }

      default: {
        if (isNoPoint || isLast || isPrevLast) {
          setAmount((prev) => (!Number(prev) ? value : prev + value));
        }
      }
    }
  };

  return {
    value: amount,
    onSelect,
  };
};
