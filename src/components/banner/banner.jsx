import './banner.scss';
import PropTypes from 'prop-types';

function Banner({img_path,shadow,title}){
    console.log(img_path);
    if (shadow){
        return(
            <div className='banner'>
                <img src={img_path} alt="photo de paysage" />
                <div className='banner--shadow'>ez</div>
                <p>{title}</p>
            </div>
        )
    }
    return (
        <div className='banner'>
            <img src={img_path} alt="photo de paysage" />
            <p>{title}</p>    
        </div>
    );
}
Banner.propTypes = {
    img_path: PropTypes.string.isRequired,
    shadow: PropTypes.oneOf([0,1]).isRequired, 
    title: PropTypes.string.isRequired    
};
export default Banner;