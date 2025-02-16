import './errorPage.scss'
import { useNavigate } from "react-router";
function ErrorPage(){
    const navigate = useNavigate();
    const toHomePage = () => {
        navigate('/');
    }
    return (
        <div className='errorPage'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n&apos;existe pas.</p>
            <button type="button" onClick={toHomePage}>Retourner sur la page d&apos;accueil</button>
        </div>
    );
}

export default ErrorPage;