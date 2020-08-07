let axios = require('axios');
let defaults = require('./defaultGiphy');


let gifResource = {
    random: function() {
        return axios({
            ...defaults,
            method: 'GET',
            url: 'gifs/random',
            params: {
                api_key: '9K4V6AG8YQR5lJCnKwPzL6cxzxcPlim4' 
            }
        });
    },
    trending: function() {
        return axios({
            ...defaults,
            method: 'GET',
            url: 'gifs/trending',
            params: {
                api_key: '9K4V6AG8YQR5lJCnKwPzL6cxzxcPlim4'
            }
        });
    },
    search: function(q) {
        return axios({
            ...defaults,
            method: 'GET',
            url: 'gifs/trending',
            params: {
                q: q,
                api_key: '9K4V6AG8YQR5lJCnKwPzL6cxzxcPlim4'
            }
        });
    }
}
module.exports = gifResource