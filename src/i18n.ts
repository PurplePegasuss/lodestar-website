import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {},
    },

    en: {
      translation: {},
    },
  },
  lng: 'ru',
  fallbackLng: 'ru',
});

export default i18n;
