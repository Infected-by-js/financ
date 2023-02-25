import en from './locales/en.json';
import ru from './locales/ru.json';

export type { Localizations as I18n } from './types';
export type Locales = 'en' | 'ru';

const translations = { en, ru };

export const getLocalization = (locale: Locales) => translations[locale];
