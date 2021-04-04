const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    BITCOIN: 1,
    STELLAR: 512,
    CARDANO: 2010,
    ETHEREUM: 1027,
    CHAIN_LINK: 1975,
    LITECOIN: 2,
    UNISWAP: 7083,
    POLKADOT: 6636,
    ENJIN: 2130,
    RIPPLE: 52,
    API_KEY: process.env.COINMARKETCAP_API_KEY
}