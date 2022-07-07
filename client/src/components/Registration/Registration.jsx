import React from 'react';
import {Link} from "react-router-dom";

const Registration = ({change, registration}) => {
    return (
        <div>
            <h3>Регистрация</h3>
            <form className="form form-registration" onSubmit={e => e.preventDefault()}>
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
                    <button className="btn blue" onClick={registration}>
                        Регистрация
                    </button>
                    <Link to="/auth/login" className="btn-outline btn-reg">Есть аккаунт?</Link>
                </div>
            </form>
        </div>
    );
};

export default Registration;