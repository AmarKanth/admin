import Header from './Header.tsx';
import Nav from './Nav.tsx';


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