import classes from "./Badge.module.scss";

const Badge = (props) => {
    const { name } = props;

    return <div className={classes.badgeWrap}>
        {name ? name.charAt().toUpperCase() : null}
    </div>
}

export default Badge