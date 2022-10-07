import Button from '../Button';
import Link from '../Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Autocomplete from '../Autocomplete';
import ProductCard from '../ProductCard'
import classes from "./FirstTask.module.scss";

const options = [
    { id: 1, name: 'From expensive to cheap', value: 'price', sortType: 'price_hight' },
    { id: 2, name: 'From cheap to expensive', value: 'price', sortType: 'price_low' },
    { id: 3, name: 'Most left in stock', value: 'count', sortType: 'count_hight' },
    { id: 4, name: 'Little left in stock', value: 'count', sortType: 'count_low' }
];

const FirstTask = ({ children, products, onSort }) => {

    const handleChangeAutocomplete = (option) => {
        onSort(option.sortType)
    }

    return <>
        <Button variant="contained">
            <Link href='/'>
                <div className={classes.linkBack}>
                    <ArrowBackIcon />
                    <span>Go back</span>
                </div>
            </Link>
        </Button>

        <div className={classes.products}>
            <div className={classes.autocomplete}>
                <span className={classes.autocompleteTitle}>Sort products by -</span>
                <Autocomplete
                    options={options}
                    displayByKey='name'
                    onChange={handleChangeAutocomplete}
                />
            </div>


            {products.map((product) => {
                return <ProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    count={product.count}
                />
            })}
        </div>
    </>
}

export default FirstTask