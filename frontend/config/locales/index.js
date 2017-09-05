const validateLocale = () => {
  const locale = window.locale || 'en';
  if (/^en/.test(locale)) {
    return 'en';
  }

  export const formatLocale = () => {
    const locale = validateLocale();
    if (/^en/.test(locale)) {
      return locale;
    }
  }
  const getLocale = (page) => {
    const locale = validateLocale();
    let datas = {};
    try {
      datas = require(`./${page}/${locale}.js`).default;
    } catch (e) {
      datas = require(`./${page}/en.js`).default;
    } finally {
      return datas;
    }
  };
}
export default getLocale;