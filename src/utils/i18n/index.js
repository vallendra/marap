import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from 'constants/locales/en';
import id from 'constants/locales/id';

const isDevEnv = process.env.NODE_ENV === 'development';

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en, id },
    lng: 'id',
    fallbackLng: 'id',
    debug: isDevEnv,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: true
    }
  });
