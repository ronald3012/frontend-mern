import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskStartLoading } from '../actions/taskActions';
import Task from './Task';

const TasksList = () => {

    const dispatch = useDispatch();
    const {tasks, checking} = useSelector(state=>state.taskReducer);
    useEffect(() => {
        dispatch( taskStartLoading() )
    }, [dispatch]);


    return (
        <section className="container">
                <div className="list">
                    {tasks[0] ? tasks.map(task=> <Task key={task._id} task={task} />):<p className="msj-empty">Add a task  📝</p>}
                    {checking && <p>Loading tasks...</p>}
                    
                </div>
        </section>
    )
}

export default TasksList;
