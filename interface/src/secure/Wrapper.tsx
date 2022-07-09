import React, {Component} from 'react';
import Header from './components/Header.tsx';
import Nav from './components/Nav.tsx';


class Wrapper extends Component {
	render() {
		return (
			<>
				<Header />
            
	            <div className="container-fluid">
	            	<div className="sidebar">
                    	<Nav />
                    </div>

                    <div className="main-content">
                        {this.props.children}
                    </div>
	            </div>	
			</>
		)
	}
}

export default Wrapper;