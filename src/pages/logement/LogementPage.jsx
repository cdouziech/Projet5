import { useParams } from "react-router";
import logements from 'C:/openclassroom/P5/Projet5/logements.json';
import Banner from 'C:/openclassroom/P5/Projet5/src/components/banner/banner.jsx';
import './logementPage.scss';

function Logement(){
    const {id}= useParams(); // get the id from the URL
    let logement             
    logements.map((lgmt)=>(
        lgmt.id == id ? logement = lgmt : null  // get all infos of the wanted location using the id
    ));

    return (
        <div className="lgmtPage">

            <Banner 
            img_path={logement.cover}
            shadow= {0}
            title=""
            ></Banner>

            <div className="lgmtPage__infos">
                <div>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className="lgmtPage__infos-tags">
                        {logement.tags.map((tag, index)=> (
                            <div className="tag" key={tag+index}>{tag}</div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="lgmtPage__infos-author">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="photo du propriétaire de la location" />
                    </div>
                    <div className="lgmtPage__infos-rating"></div>
                </div>

            </div>

            <div className="lgmtPage__collapseContainer">

            </div>
        </div>
    );
}

export default Logement;