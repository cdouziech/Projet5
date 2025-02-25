import { useParams } from "react-router";
import Banner from 'C:/openclassroom/P5/Projet5/src/components/banner/banner.jsx';
import './logementPage.scss';
import { useEffect, useState } from "react";
import red_star_path from "../../assets/red-star.svg"
import grey_star_path from "../../assets/grey-star.svg"

function Logement() {
    const { id } = useParams(); // get the id from the URL

    const [logement, setLogement] = useState(null); // Utiliser un état pour le logement spécifique

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => {
                console.log("Données chargées dans Logement.js :", data);
                // Cherche le logement avec l'id correspondant
                const logementTrouve = data.find((lgmt) => lgmt.id === id);
                setLogement(logementTrouve); // Met à jour l'état avec le logement trouvé
            })
            .catch((error) => console.error("Erreur lors du chargement des logements :", error));
    }, [id]); // N'exécute que lorsque l'id change

    // Affiche un message de chargement si le logement n'est pas encore trouvé
    if (!logement) {
        return <p>Chargement...</p>;
    }

    return (
        <div className="lgmtPage">
            <Banner
                img_path={logement.cover}
                shadow={0}
                title=""
            ></Banner>

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

                <div>
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
                {/* Contenu à développer */}
            </div>
        </div>
    );
}

export default Logement;
