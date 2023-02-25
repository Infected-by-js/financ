import en from './locales/en.json';

interface Localization {
  [key: string]: string | Localization;
}

type LocalizationKeys = keyof typeof en;

type LocalizationValues<T> = T extends string
  ? string
  : T extends Localization
  ? { [K in keyof T]: LocalizationValues<T[K]> }
  : never;

export type Localizations = {
  [K in LocalizationKeys]: LocalizationValues<typeof en[K]>;
};
