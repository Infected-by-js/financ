import { useContext } from 'react';
import { LocalizationContext } from '@/core/providers/LocalizationProvider';

export const useLocalization = () => useContext(LocalizationContext);
