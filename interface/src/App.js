import './App.css';

import RedirectToDashboard from "./utils/RedirectToDashboard";
import Dashboard from './dashboard/Dashboard';

import Login from './auth/Login';

import Users from './users/Users';
import UserCreate from './users/UserCreate';
import UserEdit from './users/UserEdit';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ProtectedRoute} from "./routes/ProtectedRoute";
import {PublicRoute} from "./routes/PublicRoute";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/login'} element={<PublicRoute><Login/></PublicRoute>} />
                    <Route path={'/'} element={<ProtectedRoute><RedirectToDashboard/></ProtectedRoute>} />
                    <Route path={'/dashboard'} element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
                    <Route path={'/users'} element={<ProtectedRoute><Users/></ProtectedRoute>} />
                    <Route path={'/users/create'} element={<ProtectedRoute><UserCreate/></ProtectedRoute>} />
                    <Route path={'/users/:id/edit'} element={<ProtectedRoute><UserEdit/></ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;