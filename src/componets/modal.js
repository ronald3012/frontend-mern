import { colors, etiquetas } from "../utils/constants";
import useForm from '../hooks/useForm';
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskStartAddNew } from "../actions/taskActions";
import { hideModal } from "../actions/modalActions";

const Modal = () => {

    const [form, setForm] = useForm();
    const colorsContainer = useRef(null);
    const tagsContainer = useRef(null);
    const dispatch = useDispatch();
    const {uid:user} =  useSelector(state=> state.authReducer);
    
    const deleteColorSelected = ()=>{
        Array.from(document.querySelectorAll('.color')).map(c=>{
            return c.style.border = 'none';
        })
    }  
    const handleColorSelected = ({target})=>{
        deleteColorSelected();
        target.style.border ='3px solid lightgrey';
    }
    const handleEtiquetaSelected = ({target})=>{
        !target.style.border ? 
        target.style.border ='3px solid lightgrey':
        target.removeAttribute('style');
    }
    const getSelectedTags = ( container ) => {
        return Array.from(container.querySelectorAll('img')).filter(img=>img.style.border !== '').map(img => img.getAttribute('icono')).toString();

    }
    const getSeletedColor = ( container )=>{
        return Array.from(container.children).filter(div=>div.style.border !== 'none' && div.style.border !== '')[0]?.style.background;
    }
    const handleAddTask = (e)=>{
        e.preventDefault();

        const etiquetas = getSelectedTags( tagsContainer.current );
        const color = getSeletedColor( colorsContainer.current )|| '#1f999a';
        const dataForm = {...form,etiquetas, color,completed:false, user }; 
        
        dispatch( taskStartAddNew(dataForm) );
    }

    const handleHideModal  = ()=>dispatch(hideModal());

    return (
        <div className="modal">
            <div className="modal-body">
                <form id="form-task" onSubmit={handleAddTask}>
                    <div className="modal-header">
                        <h2 className="modal-title">Add task</h2>
                        <div className="colors" ref={colorsContainer}>
                            {colors.map(color=><div key={color} onClick={handleColorSelected} className="color" style={{background: color}}></div>)}
                        </div>
                    </div>
                        <input type="hidden" name="color" onChange={setForm} />
                        <input type="hidden" name="etiquetas" onChange={setForm} />
                        <input type="text" placeholder="Write title" name="title" onChange={setForm} required />
                        <input type="date" name="date" required onChange={setForm} />
                        <input type="time" name="time" required onChange={setForm} />
                        <textarea name="description" id="" cols="30" rows="5" placeholder="Description" onChange={setForm} required></textarea>                    
                        <div className="select-etiquetas" ref={tagsContainer}>
                            <h3 className="title-eti">Hashtag </h3>

                            {etiquetas.map(eti =>( <div key={eti} className="eti">
                                                        <img icono={eti} src={`assets/img/${eti}.png`} onClick={handleEtiquetaSelected} alt="" />
                                                    </div>)
                            )}

                        </div>
                        <div className="modal-btns">
                            <button onClick={handleHideModal}  type='button' className="btn-cancel">Cancel</button>
                            <button className="btn-save">Save</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Modal;
