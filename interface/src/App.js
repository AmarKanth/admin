import './App.css';

import RedirectToDashboard from "./utils/RedirectToDashboard.tsx";
import Dashboard from './dashboard/Dashboard.tsx';

import Login from './auth/Login.tsx';

import Users from './users/Users.tsx';
import UserCreate from './users/UserCreate.tsx';
import UserEdit from './users/UserEdit.tsx';

import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<RedirectToDashboard/>} />
                    <Route path={'/dashboard'} element={<Dashboard/>} />
                    <Route path={'/login'} element={<Login/>} />
                    <Route path={'/users'} element={<Users/>} />
                    <Route path={'/users/create'} element={<UserCreate/>} />
                    <Route path={'/users/:id/edit'} element={<UserEdit/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;