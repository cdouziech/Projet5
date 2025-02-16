import './footer.scss'
import logo from 'C:/openclassroom/P5/Projet5/src/assets/logoWHITE.png';

function Footer(){
    return (
    <footer>
        <img src={logo} alt="Kasa white logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
    );
}

export default Footer;