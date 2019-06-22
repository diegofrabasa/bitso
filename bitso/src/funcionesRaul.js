const axios = require('axios');

const URL = 'https://rest.coinapi.io/v1/exchangerate/BTC/MXN';

const URL2 = 'https://rest.coinapi.io/v1/exchangerate/ETH/MXN';

const userBTC = (btcUsario) => {
axios.get(URL, {
    headers: {
        "X-CoinAPI-Key": "4D2EE2C6-5497-42E8-A4E1-9D3A5B2A0F73"
    }
})
    .then((response) => {
        // response.data
            let resultado = response.data.rate * (btcUsario)
            let fecha = new Date
            console.log(`Tienes ${btcUsario} BTC lo cual equivale a $MXN ${resultado.toFixed(2)} a las ${fecha}`)


        userBTC(5);




    });
}    

const userETH = (ethUsario) => {
axios.get(URL2, {
    headers: {
        "X-CoinAPI-Key": "4D2EE2C6-5497-42E8-A4E1-9D3A5B2A0F73"
    }
})
    .then((response) => {
        // response.data
        
            let resultado = response.data.rate * (ethUsario)
            let fecha = new Date
            console.log(`Tienes ${ethUsario} ETH lo cual equivale a $MXN ${resultado.toFixed(2)} a las ${fecha}`)

        userETH(10);

    });
}
