import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

export const localeCodes = ['en', 'jp']

export const defaultNS = 'global'

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    defaultNS,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    ns: [
      'notifications',
      'buttons',
      'global',
      'gridColumns',
      'labels',
      'placeholders',
      'titles',
      'validations',
    ],
    debug: process.env.NODE_ENV === 'development',
    react: {
      bindI18n: 'languageChanged',
      useSuspense: true,
    },
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/translations/{{lng}}/{{ns}}.json`,
    },
  })
