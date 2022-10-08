import classes from "./UserDemoComponent.module.scss";

const UserDemoComponent = (props) => {
    const { children, username } = props;

    return <div className={classes.userDemoComponent}>
        <div className={classes.userBadge}>
            {children({ ...props })}
        </div>
        <span className={classes.userName}>
            {username}
        </span>
    </div>
}

export default UserDemoComponent