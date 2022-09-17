import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import Wrapper from '../layout/Wrapper';


const Users = () => {
	const [users, setUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);
	const [roles, setRoles] = useState([]);

	useEffect(() => {
		
		const fetchUsers = async () => {
			const response = await axios.get(`users?page=${currentPage}`);
			setUsers(response.data.data);
			setLastPage(response.data.meta.last_page);
			setTotalCount(response.data.meta.total_count);
		}
		fetchUsers();

	}, [currentPage, totalCount]);

	useEffect(() => {
		
		const fetchRoles = async () => {
			const response = await axios.get("roles/");
			setRoles(response.data);
		}
		fetchRoles();

	}, []);

	const findRole = (id) => {
		var role = roles.find(role => role.id === id)
		return (role !== undefined) ?  role.name : null
	}

	const next = async (e: SyntheticEvent) => {
		e.preventDefault();
		if (currentPage === lastPage) return;
		setCurrentPage(currentPage+1);
	}

	const prev = async(e: SyntheticEvent) => {
		e.preventDefault();
		if (currentPage === 1) return;
		setCurrentPage(currentPage-1);
	}

	const del = async(id: number, e: SyntheticEvent) => {
		e.preventDefault();
		if(window.confirm("Are you sure?")){
			await axios.delete(`users/${id}/`);
		}
		setTotalCount(totalCount-1);
	}

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
	                	{users.map((user) => {
	                		return(
	                			<tr key={user.id}>
			                        <td>{user.id}</td>
			                        <td>{user.first_name} {user.last_name}</td>
			                        <td>{user.email}</td>
			                        <td>{user.is_active ? "Active" : "InActive"}</td>
			                        <td>{findRole(user.role)}</td>
			                        <td>
			                        	<a href={`/users/${user.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</a>
			                        	<a href="!#" className="btn btn-sm btn-outline-secondary" onClick={(e) => del(user.id, e)}>Delete</a>
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
	        			<a href="!#" className="page-link" onClick={prev}>Previous</a>
	        		</li>
	        		<li className="page-item">
	        			<a href="!#" className="page-link" onClick={next}>Next</a>
	        		</li>
	        	</ul>
	        </div>	
		</Wrapper>
	)
}

export default Users;