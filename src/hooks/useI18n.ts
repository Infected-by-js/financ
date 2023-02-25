import { useContext } from 'react';
import { I18nContext } from '@/core/providers/I18nProvider';

export const useI18n = () => useContext(I18nContext);
