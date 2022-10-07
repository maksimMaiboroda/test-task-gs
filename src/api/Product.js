import Base from './Base.js';

const mockProducts = [{
        'id': 1,
        'title': 'Good tea',
        'price': 10,
        'count': 13
    },
    {
        'id': 2,
        'title': 'Good coffee',
        'price': 15,
        'count': 31
    }
]


class Product extends Base {
    async fetchProducts() {
        // const product = await this.apiClient.get('PRODUCT_ENDPOINT');

        return mockProducts;
    }
}

export default Product;