import React from 'react';
import {Link} from "react-router-dom";

const Login = ({change, login}) => {
    return (
        <div>
            <h3>Авторизация</h3>
            <form className="form form-login" onSubmit={e => e.preventDefault()}>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="email" name="email" className="validate" onChange={change}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input type="password" name="password" className="validate" onChange={change}/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <button className="btn blue" onClick={login}>
                        Войти
                    </button>
                    <Link to="/auth/registration" className="btn-outline btn-reg">Нет аккаунта?</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;