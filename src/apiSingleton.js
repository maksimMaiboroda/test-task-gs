import apiFactory from './api/index.js';

const config = {
    apiPrefix: 'https://www.mook-api.net'
}

export default apiFactory({ apiUrl: config.apiPrefix });

