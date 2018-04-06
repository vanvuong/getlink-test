// api develop
const apiUrlDev = '';
// api production
const apiUrlPro = '';
const apiUrl = process.env.NODE_ENV === 'production' ? apiUrlPro : apiUrlDev;
// base url for deploy
const baseUrlDev = '/';
const baseUrlPro = '/';
const baseUrl = process.env.NODE_ENV === 'production' ? baseUrlPro : baseUrlDev;

const webConfig = {
    languageConfig: process.env.NODE_ENV === 'production' ? 'ja' : 'en',
    NODE_ENV: process.env.NODE_ENV
};

export {
    apiUrl,
    baseUrl,
    webConfig,
};
