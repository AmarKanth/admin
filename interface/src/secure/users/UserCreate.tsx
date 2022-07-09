import {Component} from 'react';
import axios from 'axios';
import Wrapper from '../Wrapper.tsx';
import {Navigate} from 'react-router-dom';


class UserCreate extends Component {
	first_name = '';
	last_name = '';
	username = '';
	email = '';
	role = 0;

	state = {
		roles: [],
		redirect: false
	}

	componentDidMount = async () => {
		const response = await axios.get("roles/");
		
		this.setState({
			roles: response.data
		});
	}

	submit = async (e: SyntheticEvent) => {
		e.preventDefault();

		await axios.post('users/', {
			first_name: this.first_name,
			last_name: this.last_name,
			username: this.username,
			email: this.email,
			role: this.role
		})

		this.setState({
			redirect: true
		});
	}

	render() {
		if(this.state.redirect){
			return <Navigate to={'/users'}/>
		}

		return(
			<Wrapper>
				<div className="horizontal-form">	
					<h1 className="col-sm-12">Create User</h1>

					<form onSubmit={this.submit}>
						<div className="form-group col-sm-4">
					      	<label>First Name</label>          
					        <input type="text" className="form-control" placeholder="Enter first name" name="first_name" 
					        onChange={e => this.first_name = e.target.value} />
					    </div>

					    <div className="form-group col-sm-4">
					      	<label>Last Name</label>
					        <input type="text" className="form-control" placeholder="Enter last name" name="last_name"
					        onChange={e => this.last_name = e.target.value} />
					    </div>

					    <div className="form-group col-sm-4">
					      	<label>Username</label>
					        <input type="text" className="form-control" placeholder="Enter username" name="username"
					        onChange={e => this.username = e.target.value} />
					    </div>
					    
					    <div className="form-group col-sm-4">
					      	<label>Email</label>          
					        <input type="email" className="form-control" placeholder="Enter email" name="email"
					        onChange={e => this.email = e.target.value} />
					    </div>

					    <div className="form-group col-sm-4">
					      	<label>Role</label>
					      	<select name="role_id" className="form-control" onChange={e => this.role = e.target.value}>
					      		<option>Select</option>
					      		{this.state.roles.map(role => {
					      			return(
					      				<option key={role.id} value={role.id}>{role.name}</option>
					      			)
					      		})}
					      	</select>
					    </div>
					    
					    <div className="form-group col-sm-12">		
					    	<button type="submit" className="btn btn-sm btn-outline-secondary">Submit</button>
					    </div>
					</form>
				</div>
			</Wrapper>
		)
	}
}

export default UserCreate;