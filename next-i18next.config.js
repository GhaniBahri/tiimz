const path = require("path");
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeDetection: false,
  },
  localePath: path.resolve("./public/locales"),
  fallbackLng: 'en',
  // ns: ['common'],
  // debug: process.env.NODE_ENV === 'development',
  defaultNS: 'common',
  // localePath: './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};