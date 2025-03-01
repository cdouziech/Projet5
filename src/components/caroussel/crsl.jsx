import "./crsl.scss"
import PropTypes from 'prop-types';
import { useState } from "react";
import arrow_right from '../../assets/arrow-right.svg'
import arrow_left from '../../assets/arrow-left.svg'

function Caroussel({imgsPath}){
    const [activeIndex,ChangeIndex]= useState(0);

    return (
    <div className="caroussel">
        <img src={imgsPath[activeIndex]} alt="photo de paysage" />
        <img src={arrow_left} alt="icone de fleche vers la gauche"/>
        <img src={arrow_right} alt="icone de fleche vers la droite"/>
    </div>
    )
}
Caroussel.propTypes = {
    imgPaths: PropTypes.string.isRequired
}
export default Caroussel