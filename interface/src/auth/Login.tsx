import './Login.css';

import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useAuth} from '../hooks/useAuth';


const Login = () => {
	const auth = useAuth();
	const navigate = useNavigate();

	const [data, setData] = useState({
		email: '',
		password: ''
	})

	const handle = (e) => {
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
	}

	const submit = (e: SyntheticEvent) => {
		e.preventDefault();
		auth.logIn(data, () => {
			navigate("/users");	
		});
	}

	return (
		<form className="form-signin" onSubmit={submit}>
		    <h1 className="h3 mb-3 font-weight-normal">SignIn</h1>
		    <input type="email" className="form-control" placeholder="Email address" id="email" onChange={e => handle(e)} />
		    <input type="password" className="form-control" placeholder="Password" id="password" onChange={e => handle(e)} />
		    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
		</form>
	)
}

export default Login;