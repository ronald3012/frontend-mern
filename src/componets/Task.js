import { useRef } from "react";
import { useDispatch } from "react-redux"
import { taskStartDelete, taskStartUpdate } from "../actions/taskActions";


const Task = ({task:{ _id,color,etiquetas,title,description,date,time,completed }, task}) => {
    
    const dispatch = useDispatch();
    const taskElement = useRef(null);
    const loadingRef = useRef(null);

    const handleDeleteTask = ()=>{
        loadingRef.current.style.display = 'inherit';
        dispatch( taskStartDelete( _id,taskElement ) );
    }
    const handleTaskCompleted = ()=>{
        dispatch( taskStartUpdate({...task,completed:!completed},taskElement) );
    }

    return (
        <div ref={taskElement} className="task" style={{background: color}} >
                        <div className="header">
                            <span className="date">{date} - {time}</span>
                            <label className="switch">
                                <input type="checkbox" checked={completed} onChange={handleTaskCompleted} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="body">
                            <h3 className="title">{title}</h3>
                            <p className="descripcion">{description}</p>
                        </div>
                        <div className="footer">
                            <div className="etiquetas">
                                {
                                    etiquetas.split(',').map(e=><div key={e} className="etiqueta"><img className="icon-delete" src={`assets/img/${e}.png`} alt="" /></div>)
                                }
                            </div>
                            <button className="btn-delete" onClick={handleDeleteTask}>
                                <img className="icon-delete" src="assets/img/delete.png" alt="" />
                            </button>
                        </div>
                        <div ref={loadingRef} className="loading">Espere...</div>
                </div>
    )
}

export default Task
