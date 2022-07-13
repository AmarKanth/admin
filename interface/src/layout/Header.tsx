import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';


const Header = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handle = (e: SyntheticEvent) => {
        e.preventDefault();
        auth.logOut(() => {
            navigate("/login");
        });
    }

    return (
        <header className="navbar navbar-dark bg-dark shadow">
            <a className="navbar-brand col-md-3 px-3" href="/">Admin App</a>

            <div className="navbar-nav col-md-2">
                <div className="nav-item">
                    <a href="/login" className="btn btn-outline-light me-2">Login</a>
                    <a href="!#" className="btn btn-outline-light me-2" onClick={handle}>Logout</a>
                </div>
            </div>
        </header>
    )
}

export default Header;