import { useNavigate } from "react-router";
import logo from 'C:/openclassroom/P5/Projet5/src/assets/LOGO.png';
import './header.scss';
function Header(){
    const navigate = useNavigate();
    const toHomePage = () => {
        navigate('/');
    }
    const toAboutPage = () => {
        navigate('/About');
    }
    return (
    <header>
        <img src={logo} alt="Kasa logo" />
        <nav>
            <button type="button" onClick={toHomePage}>Accueil</button>
            <button type="button" onClick={toAboutPage}>A propos</button>
        </nav>
    </header>
    
    );
}

export default Header;