import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";

export const useRoutes = (isLogin) => {
    if (isLogin) {
        return (
            <Routes>
                <Route path="/" exact element={<MainPage/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/auth/*" exact element={<AuthPage/>}/>
            <Route
                path="*"
                element={<Navigate to="/auth/login" replace />}
            />
        </Routes>
    )
}