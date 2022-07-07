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

	                    <div className="main-content">
	                        {this.props.children}
	                    </div>
	                </div>
	            </div>	
			</>
		)
	}
}

export default Wrapper;