import {NavLink} from 'react-router-dom';


const Nav = () => {
    return (
        <>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink to={"/dashboard"} className={({isActive}) => (isActive ? "nav-link active" : "nav-link")} aria-current="page">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to={"/users"} className={({isActive}) => (isActive ? "nav-link active" : "nav-link")} aria-current="page">Users</NavLink>
                </li>
                <li>
                    <NavLink to={"/roles"} className={({isActive}) => (isActive ? "nav-link active" : "nav-link")} aria-current="page">Roles</NavLink>
                </li>
                <li>
                    <NavLink to={"/products"} className={({isActive}) => (isActive ? "nav-link active" : "nav-link")} aria-current="page">Products</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Nav;