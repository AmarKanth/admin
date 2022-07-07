import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import Wrapper from '../Wrapper.tsx';
import {User} from '../classes/user';


class Users extends Component {
	state = {
		users: []
	}

	componentDidMount = async () => {
		const response = await axios.get('users/');
		this.setState({
			users: response.data
		})
	}

	render() {
		return(
			<Wrapper>
				<div className="add-button">
               		<Link to={'/users/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
		        </div>

		        <div className="table-responsive">
		            <table className="table table-bordered">
		                <thead className="table-dark">
		                    <tr>
		                      	<th scope="col">#</th>
		                      	<th scope="col">Name</th>
		                      	<th scope="col">Email</th>
		                      	<th scope="col">Active</th>
		                      	<th scope="col">Role</th>
		                      	<th scope="col">Action</th>
		                    </tr>
		                </thead>
		                <tbody>
		                	{this.state.users.map((user: User) => {
		                		return(
		                			<tr key={user.id}>
				                        <td>{user.id}</td>
				                        <td>{user.first_name} {user.last_name}</td>
				                        <td>{user.email}</td>
				                        <td>{user.is_active ? "Active" : "InActive"}</td>
				                        <td>{user.role.name}</td>
				                        <td>
				                        	<Link to={`/users/${user.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
				                        	<Link to={`/users/${user.id}/edit`} className="btn btn-sm btn-outline-secondary">Delete</Link>
				                        </td>
				                    </tr>
		                		)
		                	})}
		                </tbody>
		            </table>
		        </div>

		        <div>
		        	<ul className="pagination">
		        		<li className="page-item">
		        			<a href="!#" className="page-link">Previous</a>
		        		</li>
		        		<li className="page-item">
		        			<a href="!#" className="page-link">Next</a>
		        		</li>
		        	</ul>
		        </div>	
			</Wrapper>
		)
	}
}

export default Users;