const URI = 'https://api.coincap.io/v2';

function getAssets() {
    return fetch(`${URI}/assets?limit=20`)
        .then( res => res.json() )
        .then( res => res.data );
}

function getAsset(coin) {
    return fetch(`${URI}/assets/${coin}`)
    .then( res => res.json() )
    .then( res => res.data );
}

function getAssetHistory(coin) {
    const now = new Date();
    const end = now.getTime();
    now.setDate(now.getDate()-1);
    const start = now.getTime();

    return fetch(`${URI}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`)
        .then( res => res.json() )
        .then( res => res.data);
}
function getMarkets(coin){
    return fetch(`${URI}/assets/${coin}/markets?limit=5`)
        .then( res => res.json() )
        .then( res => res.data );
}

function getExchange(id) {
    return fetch(`${URI}/exchanges/${id}`)
        .then( res => res.json() )
        .then( res => res.data );
}

export default {
    getAssets,
    getAsset,
    getAssetHistory,
    getMarkets,
    getExchange
}