import Header from './components/Header.tsx';
import Nav from './components/Nav.tsx';


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