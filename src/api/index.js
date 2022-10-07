import ApiClient from './ApiClient.js';
import Entity    from './Entity.js';
import Product   from './Product.js';

function makeApiList({ apiUrl } = {}) {
    if (!apiUrl) {
        throw new Error('[apiPrefix] required');
    }

    const apiGeneral = new ApiClient({ apiUrl });

    return {
        apiClient: apiGeneral,
        entity   : new Entity({ apiClient: apiGeneral }),
        product  : new Product({ apiClient: apiGeneral }),
    };
}

export default makeApiList;
