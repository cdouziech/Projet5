// import Card from 'C:/openclassroom/P5/Projet5/src/components/card/card.jsx';
import Banner from 'C:/openclassroom/P5/Projet5/src/components/banner/banner.jsx';
import bannerImg from 'C:/openclassroom/P5/Projet5/src/assets/homeBanner.png'
import './home.scss'
function Home() {

  return (
    <div className='homePage'>
      <Banner 
        img_path= {bannerImg}
        shadow = {1}
        title ='Chez vous, partout et ailleurs'
      ></Banner>
    </div>
    
    
        /*<Card 
        card_img_path='' 
        card_alt='' 
        card_title='' 
        ></Card>*/
  )
}

export default Home
