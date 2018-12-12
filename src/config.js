require('dotenv').config()

const dev = {
    apiBaseUrl: 'http://api.dataatwork.org/v1/'
};

const prod = {
    apiBaseUrl: 'https://prod/'
};

const config = (process.env.REACT_APP_PROD === "prod") ? prod : dev;

export default {
    // Configuraciones comunes
    // variableComun: 5000000,
    ...config
};