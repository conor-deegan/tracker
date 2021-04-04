const axios = require('axios');
const appConfig = require('./config');

const baseUrl = "https://pro-api.coinmarketcap.com";
const version = "v1";

axios.interceptors.request.use(
    (config) => {
        config.headers["X-CMC_PRO_API_KEY"] = appConfig.API_KEY;
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

const api = {
    getLatestQuotes: (ids) => {
        return axios.get(`${baseUrl}/${version}/cryptocurrency/quotes/latest?id=${ids}`);
    },
    getCoinIds: (symbols) => {
        return axios.get(`${baseUrl}/${version}/cryptocurrency/map?symbol=${symbols}`);
    }
}

module.exports = api;