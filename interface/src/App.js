import './App.css';

import RedirectToDashboard from "./secure/RedirectToDashboard.tsx";
import Dashboard from './secure/dashboard/Dashboard.tsx';
import Login from './public/Login.tsx';
import Register from './public/Register.tsx';
import Users from './secure/users/Users.tsx';
import UserCreate from './secure/users/UserCreate.tsx';

import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<RedirectToDashboard/>} />
                    <Route path={'/dashboard'} element={<Dashboard/>} />
                    <Route path={'/login'} element={<Login/>} />
                    <Route path={'/register'} element={<Register/>} />
                    <Route path={'/users'} element={<Users/>} />
                    <Route path={'/users/create'} element={<UserCreate/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;