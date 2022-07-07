import React, {useContext, useState} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import './AuthPage.scss'
import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

const AuthPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            await axios.post('/api/auth/registration', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => navigate('/'))
        } catch (error) {
            console.log(error)
        }
    }

    const loginHandler = async () => {
        try {
            await axios.post('/api/auth/login', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => login(response.data.token, response.data.userId))
        } catch (error) {console.log(error)}
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="auth-page">
                    <Routes>
                        <Route path="/login" element={<Login change={changeHandler} login={loginHandler}/>}/>
                        <Route path="/registration" element={<Registration change={changeHandler} registration={registerHandler}/>}/>
                    </Routes>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AuthPage;