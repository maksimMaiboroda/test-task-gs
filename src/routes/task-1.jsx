import { useContext, useEffect, useState } from 'react';
import ApiContext from '../ApiContext';
import FirstTask from '../components/FirstTask'
import orderBy from "lodash/orderBy";

const INITIAL_STATE = [];

const TaskOne = () => {
    const { apiAdapter } = useContext(ApiContext);
    const [products, setProducts] = useState(INITIAL_STATE);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await apiAdapter.product.fetchProducts();

            if (!fetchedProducts) return

            setProducts(fetchedProducts)
        }

        fetchProducts()
    }, []);

    const handleSort = (sortType) => {
        switch (sortType) {
            case "price_hight":
                setProducts(prev => orderBy(prev, 'price', 'desc'));
                break;
            case "price_low":
                setProducts(prev => orderBy(prev, 'count', 'asc'))
                break;
            case "count_hight":
                setProducts(prev => orderBy(prev, 'count', 'desc'))
                break;
            case "count_low":
                setProducts(prev => orderBy(prev, 'count', 'asc'))
                break;
            default:
                break;
        }
    }

    return (<FirstTask products={products} onSort={handleSort} />);
}

export default TaskOne;