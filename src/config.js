require('dotenv').config()
const dev = {
    apiBaseUrl: 'http://api.dataatwork.org/v1/jobs/'
};

const prod = {
    apiBaseUrl: 'https://prod/'
};

const config = process.env.REACT_APP_ENV_PROD
    ? prod
    : dev;

export default {
    // Configuraciones comunes
    // variableComun: 5000000,
    ...config
};