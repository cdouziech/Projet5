import { useNavigate} from "react-router";

import Banner from '../../components/banner/banner.jsx';
import bannerImg from '../../assets/homeBanner.png'
import './home.scss'
import Card from '../../components/card/card';
import {useState,useEffect} from 'react';

function Home() {
	const navigate = useNavigate();
	
	const [logements, setLogements] = useState([]);
	useEffect(() => {
    fetch("/logements.json")
    .then((response) => response.json())
    .then((data) => setLogements(data))
    .catch((error) => console.error("Erreur lors du chargement des logements :", error));
	}, []);

	console.log(logements)
	return (
    <div className='homePage'>
        <Banner 
        	img_path= {bannerImg}
        	shadow = {1} //1 means shadow is on; 0 means there's no shadow at all
        	title ='Chez vous, partout et ailleurs'
        ></Banner>
        <div className='cardsContainer'>
        {logements.map((lgt)=>(
            <Card 
            img_path={lgt.cover}
            title={lgt.title}
            key={lgt.id}
            onClick ={() => navigate('/logement/'+ lgt.id)}
            ></Card>
        ))}
        </div>
    </div>
	)
}

export default Home; 
