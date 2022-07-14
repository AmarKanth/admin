import {Navigate} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';


export const RequireAuth = ({children}) => {
    let auth = useAuth();

    console.log(auth.user);

    if (Object.keys(auth.user).length === 0) {
        return <Navigate to="/login" />;
    }

    return children;
}