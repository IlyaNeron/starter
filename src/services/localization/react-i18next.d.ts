import 'react-i18next';

import { defaultNS } from './i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
  }
}
