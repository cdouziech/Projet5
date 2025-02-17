import logements from 'C:/openclassroom/P5/Projet5/logements.json'
import Banner from 'C:/openclassroom/P5/Projet5/src/components/banner/banner.jsx';
import bannerImg from 'C:/openclassroom/P5/Projet5/src/assets/homeBanner.png'
import './home.scss'
import Card from '../../components/card/card';

console.log(logements[0]);


function Home() {

  return (
    <>
      <div className='homePage'>
        <Banner 
          img_path= {bannerImg}
          shadow = {1}
          title ='Chez vous, partout et ailleurs'
        ></Banner>
        <div className='cardsContainer'>
          {logements.map((lgt)=>(
            <Card 
            img_path={lgt.cover}
            title={lgt.title}
            alt={"Image de"+ lgt}
            key={lgt.id}
            ></Card>
          ))}
        </div>
      </div>
      
    </>
  )
}

export default Home
