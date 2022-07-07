import React, {useContext} from 'react';
import './Navbar.scss'
import {AuthContext} from "../../context/AuthContext";

const Navbar = () => {
    const {logout, isLogin} = useContext(AuthContext)
    return (
        <nav className="blue">
            <div className="nav-wrapper navbar">
                <a href="/" className="brand-logo">MERN Todo App</a>
                {isLogin
                    ?
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/" onClick={logout}>Выйти</a></li>
                    </ul>
                    :
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Войти</a></li>
                    </ul>

                }
            </div>
        </nav>
    );
};

export default Navbar;