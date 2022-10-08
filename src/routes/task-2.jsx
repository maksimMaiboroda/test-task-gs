import UserDemoComponent from '../components/UserDemoComponent'
import Loading from '../components/Loading'
import Badge from '../components/Badge'
import classes from "./task-2.module.scss";

const TaskTwo = () => {
    return (<div className={classes.container}>
        <UserDemoComponent username='tylermcginnis33'>
            {(user) => user === null
                ? <Loading />
                : <Badge name={user.name} />}
        </UserDemoComponent>
    </div>
    );
}

export default TaskTwo;