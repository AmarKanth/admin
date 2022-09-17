import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../layout/Wrapper';

const ProductCreate = () => {
	const navigate = useNavigate();
	const [data, setData] = useState({
		title: '',
		description: '',
		image: '',
		price: 0
	});

	const handle = (e) => {
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
	}

	const submit = async (e: preventDefault) => {
		e.preventDefault();
		await axios.post('products/', data);
		navigate('/products');
	}

	return(
		<Wrapper>
			<div className="horizontal-form">
				<h1 className="col-sm-12">Create Product</h1>

				<form onSubmit={submit}>
					<div className="form-group col-sm-4">
				      	<label>Title</label>          
				        <input type="text" className="form-control" placeholder="Enter Title" id="title" onChange={e => handle(e)} />
				    </div>

				    <div className="form-group col-sm-4">
				      	<label>Description</label>          
				        <input type="text" className="form-control" placeholder="Enter Description" id="description" onChange={e => handle(e)} />
				    </div>

				    <div className="form-group col-sm-4">
				      	<label>Image</label>          
				        <input type="text" className="form-control" placeholder="Enter image url" id="image" onChange={e => handle(e)} />
				    </div>

				    <div className="form-group col-sm-4">
				      	<label>Price</label>          
				        <input type="text" className="form-control" placeholder="Enter Price" id="price" onChange={e => handle(e)} />
				    </div>

				    <div className="form-group col-sm-12">		
				    	<button type="submit" className="btn btn-sm btn-outline-secondary">Submit</button>
				    </div>
				</form>
			</div>
		</Wrapper>
	)
}

export default ProductCreate;