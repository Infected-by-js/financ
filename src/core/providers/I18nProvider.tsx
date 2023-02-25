import { FC, ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { StorageService } from '@/services';
import { I18n, Locales, getLocalization } from '@/i18n';

interface Context {
  lang: Locales;
  i18n: I18n;
  setLang: (language: Locales) => void;
}

interface Props {
  children: ReactNode;
}

export const I18nContext = createContext({} as Context);

const I18nProvider: FC<Props> = ({ children }) => {
  const [lang, setLang] = useState('ru' as Locales);

  const i18n = useMemo(() => getLocalization(lang), [lang]);

  // prettier-ignore
  const handleSetLang = useCallback((lang: Locales) => {
      setLang(lang);
      StorageService.setItem('lang', lang);
    },
    [lang]
  );

  useEffect(() => {
    StorageService.getItem<Locales>('lang') //
      .then((lang) => {
        if (lang) setLang(lang);
      });
  }, []);

  return (
    <I18nContext.Provider value={{ lang, i18n, setLang: handleSetLang }}>
      {children}
    </I18nContext.Provider>
  );
};

export default I18nProvider;
