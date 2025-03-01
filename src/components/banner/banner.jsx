import './banner.scss';
import PropTypes from 'prop-types';

function Banner({img_path,shadow,title}){
    return(
        <div className='banner'>
            <img src={img_path} alt="photo de paysage" />
            {shadow ? <div className='banner--shadow'></div> : null}
            <p>{title}</p>
        </div>
    )
}
Banner.propTypes = {
    img_path: PropTypes.string.isRequired,
    shadow: PropTypes.oneOf([0,1]).isRequired, 
    title: PropTypes.string.isRequired    
};
export default Banner;