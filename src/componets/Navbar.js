import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { startLogout } from '../actions/authActions';

const Navbar = () => {
 const dispatch = useDispatch();
 const {name} = useSelector(state => state.authReducer);

 const handleLogout = ()=>{
    dispatch(startLogout());
 }

    return (
        <nav className="menu">
                <Link to="/login" onClick={handleLogout} > ◅ Logout</Link>
                👤 {name}
        </nav>
    )
}

export default Navbar
