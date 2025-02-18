import './card.scss';
import PropTypes from 'prop-types';

function Card({img_path,alt,title,onClick}){
    return(
        <div className='cardContainer' onClick={onClick}>
            <img src={img_path} alt={alt} />
            <div className='cardShadow'></div>
            <p>{title}</p>
        </div>
    );
}

Card.propTypes = {
    img_path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,  
    onClick: PropTypes.func 
};

export default Card