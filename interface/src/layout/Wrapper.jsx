import Header from './Header';
import Nav from './Nav';


const Wrapper = (props) => {
	return (
		<>
			<Header />
        
            <div className="container-fluid">
            	<div className="sidebar">
                	<Nav />
                </div>

                <div className="main-content">
                    {props.children}
                </div>
            </div>	
		</>
	)
}

export default Wrapper;