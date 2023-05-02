import { ExchangeGateIo, ExchangeKuCoin, ExchangeMXC, ExchangePancakeswap } from "../../../assets/images/new";


export const exchangeList = [
    {
        name: 'KuCoin',
        image: ExchangeKuCoin,
        link: 'https://www.kucoin.com/trade/SIN-USDT'
    },
    {
        name: 'Pancakeswap',
        image: ExchangePancakeswap,
        link: 'https://pancakeswap.finance/swap?inputCurrency=0x6397de0f9aedc0f7a8fa8b438dde883b9c201010&outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&utm_source=coingecko&utm_content=coingecko&utm_campaign=coingecko&utm_medium=coingecko&utm_term=coingecko'
    },
    {
        name: 'MXC',
        image: ExchangeMXC,
        link: 'https://www.mexc.com/exchange/SIN_USDT'
    },
    {
        name: 'Gate.io',
        image: ExchangeGateIo,
        link: 'https://www.gate.io/trade/SIN_USDT'
    },
];