// function format(localization) {

//   const result = {};
//   for (const key in raw.en) {
//     const value = raw.en[key];
//     if (typeof value === 'string') {
//       result[key] = [value, raw.ru[key]];
//     } else if (typeof value === 'object') {
//       result[key] = {};
//       for (const nestedKey in value) {
//         result[key][nestedKey] = [value[nestedKey], raw.ru[key][nestedKey]];
//       }
//     }
//   }
//   return result;
// }

// function formatBack(result, langs) {
//   const raw = {};
//   for (const lang of langs) {
//     for (const key in result) {
//       const value = result[key];
//       if (Array.isArray(value)) {
//         if (!raw[lang]) {
//           raw[lang] = {};
//         }
//         raw[lang][key] = value[langs.indexOf(lang)];
//       } else if (typeof value === 'object' && value !== null) {
//         if (!raw[lang]) {
//           raw[lang] = {};
//         }
//         raw[lang][key] = formatRaw(value, langs)[lang];
//       }
//     }
//   }
//   return raw;
// }

export const filterByLocaleIndex = <T>(localization: any, index: number): T => {
  const locale = {} as any;

  Object.entries(localization).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      locale[key] = value[index] || '';
    } else if (typeof value === 'object') {
      locale[key] = filterByLocaleIndex(value, index);
    }
  });

  return locale;
};
