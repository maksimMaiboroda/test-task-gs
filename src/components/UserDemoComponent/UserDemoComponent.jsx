import classes from "./UserDemoComponent.module.scss";

const UserDemoComponent = ({ children, username }) => {
    return <div className={classes.userDemoComponent}>
        <div className={classes.userBadge}>
            {children}
        </div>
        <span className={classes.userName}>
            {username}
        </span>
    </div>
}

export default UserDemoComponent