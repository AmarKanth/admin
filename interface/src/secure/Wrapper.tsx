import React, {Component} from 'react';
import Header from './components/Header.tsx';
import Nav from './components/Nav.tsx';


class Wrapper extends Component {
	render() {
		return (
			<>
				<Header />
            
	            <div className="container-fluid">
	                <div className="row">
	                    <Nav />

	                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
	                        {this.props.children}
	                    </main>
	                </div>
	            </div>	
			</>
		)
	}
}

export default Wrapper;