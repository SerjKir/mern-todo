import React, {useContext, useEffect, useState} from 'react';
import './MainPage.scss'
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

const MainPage = () => {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState([])
    const {userId} = useContext(AuthContext)

    const getTodo = async () => {
        try {
            await axios.get('/api/todo', {
                params: {userId}
            }).then(response => {
                setTodos(response.data)
            })


        } catch (error) {console.log(error)}
    }

    useEffect(() => {
        getTodo()
    },[])

    const createTodo = async () => {
        if(!text) return null
        try {
            await axios.post('/api/todo/add', {text, userId}).then(response => {
                setText('')
                setTodos([...todos, response.data])
            })
        } catch (error) {console.log(error)}
    }

    const removeTodo = async (id) => {
        console.log(id)
        try {
            await axios.delete(`/api/todo/delete/${id}`, {id})
                .then(() => {getTodo()})
        } catch (error) {console.log(error)}
    }

    const completedTodo = async (id) => {
        try {
            await axios.put(`/api/todo/complete/${id}`, {id})
                .then(() => getTodo())
        } catch (error) {console.log(error)}
    }

    const importantTodo = async (id) => {
        try {
            await axios.put(`/api/todo/important/${id}`, {id})
                .then(() => getTodo())
        } catch (error) {console.log(error)}
    }

    return (
        <div className="container">
            <div className="main-page">
                <h4>Добавтиь задачу:</h4>
                <form className="form form-login" onSubmit={e => e.preventDefault()}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" id="text" name="input" className="validate" onChange={e => setText(e.target.value)} value={text}/>
                            <label htmlFor="input">Задача:</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn blue" onClick={createTodo}>Добавить</button>
                    </div>
                </form>
                <h3>Активные задача:</h3>
                <div className="todos">
                    {
                        todos.map((todo, index) => {
                            let cls = ['row flex todos-item']
                            if (todo.completed) {
                                cls.push('completed')
                            }
                            if (todo.important) {
                                cls.push('important')
                            }

                            return (
                                <div key={index} className={cls.join(' ')}>
                                    <div className="col todos-num">{index + 1}</div>
                                    <div className="col todos-text">{todo.text}</div>
                                    <div className="col todos-buttons">
                                        <i className="material-icons blue-text" onClick={() => completedTodo(todo._id)}>check</i>
                                        <i className="material-icons orange-text" onClick={() => importantTodo(todo._id)}>warning</i>
                                        <i className="material-icons red-text" onClick={() => removeTodo(todo._id)}>delete</i>
                                    </div>
                                </div>
                            )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MainPage;