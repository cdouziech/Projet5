import './card.scss';
import PropTypes from 'prop-types';

function Card({img_path,alt,title}){
    return(
        <div className='cardContainer'>
            <img src={img_path} alt={alt} />
            <div className='cardShadow'></div>
            <p>{title}</p>
        </div>
    );
}

Card.propTypes = {
    img_path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired    
};

export default Card