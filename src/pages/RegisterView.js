import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRegister } from '../actions/authActions';
import useForm from '../hooks/useForm';

const RegisterView = () => {
    const [form, setForm] = useForm({
        name:'',
        email:'',
        password:'',
        password2:''
    });
    const dispatch = useDispatch();

    const { name, email, password, password2 } = form;

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        password === password2 && dispatch( startRegister( email, password, name ) )
            
    }
    return (
        <div className="register">
            <img src="./assets/img/logo.png" alt="Logo"/>
            <h1>Register</h1>
            <form onSubmit={handleOnSubmit} className="formRegister">

                <label htmlFor="email">Full name</label>
                <input type="text" name="name" autoComplete="off" onChange={setForm} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" autoComplete="off" onChange={setForm} />

                <label htmlFor="email">Password</label>
                <input type="password" name="password" autoComplete="off" onChange={setForm} value={password} />

                <label htmlFor="email">Password</label>
                <input type="password" name="password2" autoComplete="off" onChange={setForm} value={password2} />

                {password !== password2 && <p className="alert">Passwords do not match</p>}

                <button type="submit">Save</button>
                <p className="cancel">
                    <Link to="login">Cancel</Link>
                </p>
            </form>
        </div>
    )
}

export default RegisterView;
