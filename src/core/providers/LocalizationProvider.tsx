import { FC, ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { StorageService } from '@/services';
import { LocalizationErrors, LocalizationStrings, getLanguageIndex } from '@/localization';
import { filterByLocaleIndex } from '@/localization/format';
import errorsTranslates from '@/localization/translations/errors.json';
import stringsTranslates from '@/localization/translations/strings.json';

interface Context {
  language: Language;
  strings: LocalizationStrings;
  errors: LocalizationErrors;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

interface Props {
  children: ReactNode;
}

export const LocalizationContext = createContext({} as Context);

const LocalizationProvider: FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState('ru' as Language);

  const strings = useMemo(() => {
    const index = getLanguageIndex(language);
    return filterByLocaleIndex<LocalizationStrings>(stringsTranslates, index);
  }, [language]);

  const errors = useMemo(() => {
    const index = getLanguageIndex(language);
    return filterByLocaleIndex<LocalizationErrors>(errorsTranslates, index);
  }, [language]);

  const handleSetLanguage = useCallback(
    (lang: Language) => {
      setLanguage(lang);
      StorageService.setItem('lang', lang);
    },
    [language]
  );

  const toggleLanguage = useCallback(() => {
    handleSetLanguage(language === 'en' ? 'ru' : 'en');
  }, [language]);

  useEffect(() => {
    StorageService.getItem<Language>('lang').then((lang) => {
      if (lang) setLanguage(lang);
    });
  }, []);

  return (
    <LocalizationContext.Provider
      value={{
        language,
        strings,
        errors,
        setLanguage: handleSetLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export default LocalizationProvider;
