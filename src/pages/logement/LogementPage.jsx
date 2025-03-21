import { useParams, useNavigate } from "react-router";
import './logementPage.scss';
import { useEffect, useState } from "react";
import red_star_path from "../../assets/red-star.svg"
import grey_star_path from "../../assets/grey-star.svg"
import Collapse from "../../components/collapse/Collapse.jsx";
import Carrousel from '../../components/caroussel/crsl.jsx';

function Logement() {
    const { id } = useParams(); // get the id from the URL
    const navigate = useNavigate();
    
    const [logement, setLogement] = useState(null); // Utiliser un état pour le logement spécifique

    useEffect(() => {
        const fetchLogement = async () => {
            try {
                const response = await fetch("/logements.json");
                const data = await response.json();
                const logementTrouve = data.find((lgmt) => lgmt.id === id);
                if (logementTrouve) {
                    setLogement(logementTrouve);
                } else {
                    navigate("/error"); // Redirection si le logement n'est pas trouvé
                }
            } catch (error) {
                console.error("Erreur lors du chargement des logements :", error);
                navigate("/error"); // Redirection en cas d'erreur
            }
        };
    
        fetchLogement();
    }, [id, navigate]);

    if (!logement) {
        return <p>Chargement...</p>;
    }
    return (
        <div className="lgmtPage">
            <Carrousel
                imgsPath={logement.pictures}
                maxIndex={logement.pictures.length}
            ></Carrousel>

            <div className="lgmtPage__infos">
                <div>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className="lgmtPage__infos-tags">
                        {logement.tags.map((tag, index) => (
                            <div className="tag" key={tag + index}>{tag}</div>
                        ))}
                    </div>
                </div>

                <div className="author-and-rating">
                    <div className="lgmtPage__infos-author">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="photo du propriétaire de la location" />
                    </div>
                    <div className="lgmtPage__infos-rating">
                        {Array.from({ length: logement.rating }).map((_,index) =>(
                            <img alt="étoile de notation" src={red_star_path} key={index}/>
                        ))}
                        {Array.from({ length: 5 - logement.rating  }).map((_,index) =>(
                            <img alt="étoile de notation" src={grey_star_path} key={index}/>
                        ))}
                    </div>
                </div>

            </div>

            <div className="lgmtPage__collapseContainer">
                <Collapse
                    title="Description"
                    content={<p className="description">{logement.description}</p>}
                ></Collapse>
                <Collapse
                    title="Equipements"
                    content={<div className="Equipments">{logement.equipments.map((eqpt)=>(<li key={eqpt}>{eqpt}</li>))}</div>}
                ></Collapse>
            </div>
        </div>
    );
}

export default Logement;
