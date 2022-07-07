import React, {Component} from "react";
import axios from 'axios';
import {Navigate} from 'react-router-dom';


class Header extends Component {
    state = {
        redirect: false
    }

    handleClick = async (e: SyntheticEvent) => {
        e.preventDefault();
        
        await axios.get('logout/').then(res => {
            localStorage.removeItem('refresh');
            localStorage.removeItem('access');
        });

        this.setState({
            redirect: true
        });
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to={"/login"} />
        }

        return (
            <header className="navbar navbar-dark bg-dark shadow">
                <a className="navbar-brand col-md-3 px-3" href="/">Admin App</a>

                <div className="navbar-nav col-md-2">
                    <div className="nav-item">
                        <a href="/login" className="btn btn-outline-light me-2">Login</a>
                        <a href="!#" className="btn btn-outline-light me-2" onClick={this.handleClick}>Logout</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;