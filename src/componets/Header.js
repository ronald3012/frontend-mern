import React from 'react'
import { useDispatch } from 'react-redux';
import { showModal } from '../actions/modalActions';

const Header = () => {
    const dispatch = useDispatch();
    const hanndleShowModalForm = ()=>{
        dispatch(showModal());
    }
    return (
        <header>
            <h1>To Do</h1>
            <button className="btn-add" onClick={hanndleShowModalForm}>Add</button>
        </header>
    )
}

export default Header;
