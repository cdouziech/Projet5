import './aboutPage.scss'

import Banner from 'C:/openclassroom/P5/Projet5/src/components/banner/banner.jsx';
import bannerImg from 'C:/openclassroom/P5/Projet5/src/assets/aboutBanner.png'

import Collapse from 'C:/openclassroom/P5/Projet5/src/components/collapse/Collapse';
function About(){
    return (
        <div className='aboutPage'>
            <Banner 
                img_path= {bannerImg}
                shadow = {0}
                title =''
            ></Banner>
            <Collapse 
            title="qq"
            content="kk"
            ></Collapse>
        </div>
    );
}

export default About;