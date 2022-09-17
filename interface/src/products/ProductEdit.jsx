import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../layout/Wrapper';

const ProductEdit = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [data, setData] = useState({
		title: '',
		description: '',
		image: '',
		price: 0
	});

	useEffect(() => {
		const fetchProducts = async() => {
			const response = await axios.get(`products/${id}`);
			setData(response.data);
		}
		fetchProducts();
	}, [id]);

	const handle = async(e: preventDefault) => {
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
	}

	const submit = async(e: SyntheticEvent) => {
		e.preventDefault();
		await axios.put(`products/${id}/`, data);
		navigate('/products');
	}

	return(
		<Wrapper>
			<div className="horizontal-form">
				<h1 className="col-sm-12">Edit Product</h1>

				<form onSubmit={submit}>
					<div className="form-group col-sm-4">
				      	<label>Title</label>          
				        <input type="text" className="form-control" placeholder="Enter Title" id="title" defaultValue={data.title} onChange={e => handle(e)} />
				    </div>

				    <div className="form-group col-sm-4">
				      	<label>Description</label>          
				        <input type="textarea" className="form-control" placeholder="Enter description" id="description" defaultValue={data.description} onChange={e => handle(e)} />
				    </div>

				    <div className="form-group col-sm-4">
				      	<label>Price</label>          
				        <input type="text" className="form-control" placeholder="Enter price" id="price" defaultValue={data.price} onChange={e => handle(e)} />
				    </div>

				    <div className="form-group col-sm-4">
				      	<label>Image</label>          
				        <input type="text" className="form-control" placeholder="Enter image url" id="image" defaultValue={data.image} onChange={e => handle(e)} />
				    </div>

				    <div className="form-group col-sm-12">		
				    	<button type="submit" className="btn btn-sm btn-outline-secondary">Submit</button>
				    </div>
				</form>
			</div>
		</Wrapper>
	)
}

export default ProductEdit;