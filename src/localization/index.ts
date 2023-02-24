export { default as LocalizationErrors } from './types/errors';
export { default as LocalizationRawErrors } from './types/errorsRaw';
export { default as LocalizationStrings } from './types/strings';
export { default as LocalizationRawStrings } from './types/stringsRaw';

export const getLanguageIndex = (language: Language) => (language === 'en' ? 0 : 1);
