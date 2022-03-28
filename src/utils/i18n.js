import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from '../assets/locales/en';
import ru from '../assets/locales/ru';

I18n.fallbacks = true;
I18n.translations = { ru, en };

// set user preferred locale
const locales = RNLocalize.getLocales();
if (Array.isArray(locales)) {
    I18n.locale = locales[0].languageTag;
};

export const changeLanguage = (tag) => {
    I18n.locale = tag;
};

export const currentLanguage = () => {
  let lang = I18n.locale;

  if (lang.length > 2) {
    const split = lang.split('-');

    if (split.length > 0) {
      lang = split[0];
    }
  }

  return lang;
};

export default I18n;
