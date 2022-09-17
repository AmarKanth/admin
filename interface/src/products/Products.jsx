import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import Wrapper from '../layout/Wrapper';


const Products = () => {
	const [products, setProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);

	useEffect(() => {
		const fetchProducts = async() => {
			const response = await axios.get(`products/?page=${currentPage}`);
			setProducts(response.data.data);
			setLastPage(response.data.meta.last_page);
			setTotalCount(response.data.meta.total_count);
		}
		fetchProducts();

	}, [currentPage, totalCount]);

	const next = async(e: SyntheticEvent) => {
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
			await axios.delete(`products/${id}`)
		}
		setTotalCount(totalCount-1);
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

export default Products;