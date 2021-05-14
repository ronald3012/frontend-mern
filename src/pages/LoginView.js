import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogin } from '../actions/authActions';
import useForm from '../hooks/useForm';

const LoginView = () => {
    const [form, setForm] = useForm({
        email:'ronald@deleon.com',
        password:'clave01'
    });
    const dispatch = useDispatch();

    const {email, password} = form;

    const handleOnSubmit = (e)=>{
        e.preventDefault();

        dispatch( startLogin(email, password) )
    }
    return (
        <div className="login">
            <img src="/assets/img/logo.png" alt="Logo"/>
            <h1>Todo List</h1>
            <form onSubmit={handleOnSubmit} className="formLogin">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" autoComplete="off" onChange={setForm} value={email} />

                <label htmlFor="email">Password</label>
                <input type="password" name="password" autoComplete="off" onChange={setForm} value={password} />

                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginView;
