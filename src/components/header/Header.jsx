import { NavLink } from "react-router";

import logo from '../../assets/LOGO.png';
import './header.scss';
function Header(){
    return (
    <header>
        <img src={logo} alt="Kasa logo" />
        <nav>
            <NavLink className="link" to='/'>Accueil</NavLink>
            <NavLink className="link" to='/About'>A propos</NavLink>
        </nav>
    </header>
    
    );
}// souligner la page active

export default Header;