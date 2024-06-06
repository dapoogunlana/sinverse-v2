export const apiLinks = {
    binance: `https://api.binance.com/api/v3/ticker/24hr`,
    coinGeco: 'https://api.coingecko.com/api/v3/coins/sin-city',
    cryptoCompare: `https://min-api.cryptocompare.com/data/all/coinlist?fsym=SIN&api_key=7c4c789b0b6c160099497bdfca52a1e941a04d982a37159634689f409ee2e1bd`,
    coinMarketCap: 'https://pro-api.coinmarketcap.com/v1/',
    url: (window.location.href.indexOf('localhost') === -1) ?
     'https://manilla-backend.herokuapp.com/api/v2/' : 'http://localhost:3500/api/v2/',
    next: ``,
}

export const externalLinkConstants = {
    whiteListForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeTTNMBOEw0C_5P_Xu1Rn8dKIHE3Fm16uF0GuAFIhhNFuutjQ/viewform?usp=sf_link',
    partnershipForm: 'https://docs.google.com/forms/d/e/1FAIpQLSf4-DQOsZ-H-DpVHrHZc0nTzp3I2jgNWN94eynNy646pjZ0RA/viewform',

    kuCoin: 'https://www.kucoin.com/trade/SIN-USDT',
    pancakeswap: 'https://pancakeswap.finance/swap?outputCurrency=0x6397de0f9aedc0f7a8fa8b438dde883b9c201010',
    mxc: 'https://www.mexc.com/exchange/SIN_USDT',
    gate_io: 'https://www.gate.io/trade/SIN_USDT',
    marketplace: 'https://marketplace.sinverse.com',
    hyperPlay: 'https://store.hyperplay.xyz/game/sinverse'
}
 
 
export const socialLinks = {
    telegram: 'https://t.me/thesinverse',
    twitter: 'https://twitter.com/TheSinVerse',
    instagram: 'https://www.instagram.com/sin.verse',
    medium: 'https://medium.com/@TheSinVerse',
    discord: 'https://discord.gg/SinVerse',
};