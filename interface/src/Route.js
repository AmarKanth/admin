import {useMatch, Route} from "react-router-dom";


function MyRoute({ path, Comp }) {
    let match = useMatch(path);
    return (<Route path={path} element={<Comp {...match}/>} />);
}

export default MyRoute;