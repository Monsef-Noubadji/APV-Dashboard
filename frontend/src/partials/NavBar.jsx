import '../css/navbar.css'
import logo from '../assets/apv-logo.svg'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return ( 
        <header>
        <nav className="nav-bar">
            <Link to="/" className='Link'>
                <h2>Algerian Positive Vibes</h2>
            </Link>
            <img src={logo} alt="apv-logo" className='logo'/>
        </nav>
        </header>
     );
}
 
export default NavBar;