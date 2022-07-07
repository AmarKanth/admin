import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <>
                <div className="sidebar">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink to={"/dashboard"} className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')} aria-current="page">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/users"} className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')} aria-current="page">Users</NavLink>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Nav;