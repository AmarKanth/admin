import './App.css';

import Dashboard from './secure/dashboard/Dashboard.tsx';
import Users from './secure/users/Users.tsx';
import Login from './public/Login.tsx';
import Register from './public/Register.tsx';

import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Dashboard/>} />
                    <Route path={'/users'} element={<Users/>} />
                    <Route path={'/login'} element={<Login/>} />
                    <Route path={'/register'} element={<Register/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;