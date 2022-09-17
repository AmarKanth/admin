import {Navigate} from 'react-router-dom';


export const PublicRoute = ({children}) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if(isAuthenticated) {
        return <Navigate to="/" replace={true} />
    }
    return children;
}