import "./crsl.scss"
import PropTypes from 'prop-types';
import { useState } from "react";
import arrow_right from '../../assets/arrow-right.svg'
import arrow_left from '../../assets/arrow-left.svg'

function Carrousel({imgsPath, maxIndex}){
    let [activeIndex,ChangeIndex]= useState(0);

    return (
    <div className="carrousel">
        <img src={imgsPath[activeIndex]} alt="photo de présentation du logement" className="banner" />
        
        {maxIndex >1 ? 
        <>
            <div className="arrowsContainer">
                <img 
                    src={arrow_left} 
                    alt="icone de fleche vers la gauche"
                    onClick={()=>(activeIndex>0 ? ChangeIndex(activeIndex -=1) : ChangeIndex(activeIndex=maxIndex-1))}
                    className="navArrow"
                />
                <img 
                    src={arrow_right} 
                    alt="icone de fleche vers la droite"
                    onClick={()=>(activeIndex<maxIndex-1 ? ChangeIndex(activeIndex +=1) : ChangeIndex(activeIndex=0))}
                    className="navArrow"
                />
            </div> 
            <div className="counter">
                <p>{activeIndex+1}/{maxIndex}</p>
            </div>
        </>
        : null}
    </div> 
    )
}
Carrousel.propTypes = {
    imgsPath: PropTypes.string.isRequired,
    maxIndex : PropTypes.number.isRequired
}
export default Carrousel