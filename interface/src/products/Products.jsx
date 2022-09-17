import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import Wrapper from '../layout/Wrapper';


const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async() => {
			const response = await axios.get('products/');
			setProducts(response.data)
		}
		fetchProducts();

	}, []);

	const del = async(e: SyntheticEvent) => {
		console.log(e);
	}

	return(
		<Wrapper>
			<div className="add-button">
           		<Link to={'/products/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
	        </div>

	        <div className="table-responsive">
	            <table className="table table-bordered">
	                <thead className="table-dark">
	                    <tr>
	                      	<th scope="col">#</th>
	                      	<th scope="col">Title</th>
	                      	<th scope="col">Description</th>
	                      	<th scope="col">Price</th>
	                      	<th scope="col">Image</th>
	                      	<th scope="col">Action</th>
	                    </tr>
	                </thead>
	                <tbody>
	                	{products.map((product) => {
	                		return(
	                			<tr key={product.id}>
			                        <td>{product.id}</td>
			                        <td>{product.title}</td>
			                        <td>{product.description}</td>
			                        <td>{product.price}</td>
			                        <td>{product.image}</td>
			                        <td>
			                        	<a href={`/products/${product.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</a>
			                        	<a href="!#" className="btn btn-sm btn-outline-secondary" onClick={(e) => del(product.id, e)}>Delete</a>
			                        </td>
			                    </tr>
	                		)
	                	})}
	                </tbody>
	            </table>
	        </div>
		</Wrapper>
	)
}

export default Products;