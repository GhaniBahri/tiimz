/** @type {import('next-i18next').UserConfig} */
// const path = require("path");
const config = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr'],
    },
    // localePath: path.resolve('./public/locales'),
    localeDetection: false,
  }
export  {config}