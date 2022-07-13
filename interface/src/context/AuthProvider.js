import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const AuthContext = React.createContext({});

const AuthProvider = ({children}) => {
	const [user, setUser] = useState({});

	const fetchUser = async () => {
		await axios.get('user_details/').then(res => {
			setUser(res.data);
		})
	}

	useEffect(() => {
		fetchUser();
	}, []);

	const logIn = async (credentials, callback) => {
		await axios.post('token/create/', credentials).then(res => {
			localStorage.setItem('refresh', res.data.refresh);
			localStorage.setItem('access', res.data.access);
			fetchUser();
			callback();
		}).catch(error => {
			localStorage.removeItem('refresh');
			localStorage.removeItem('access');
		})
	}

	const logOut = async (callback) => {
		await axios.get('logout/').then(res => {
            localStorage.removeItem('refresh');
            localStorage.removeItem('access');
            setUser({});
            callback();
        });
	}

	const value = { user, logIn, logOut };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;