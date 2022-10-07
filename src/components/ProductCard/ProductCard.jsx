import Button from '@mui/material/Button';
import classes from "./ProductCard.module.scss";

const ProductCard = ({ title, price, count }) => {
    return <div className={classes.productCard}>
        <div>{title}</div>
        <div className={classes.priceBlock}>
            <div className={classes.productPrice}>{price} $</div>
            <div className={classes.productCount}>{count} - in stock</div>
        </div>
    </div>
}

export default ProductCard