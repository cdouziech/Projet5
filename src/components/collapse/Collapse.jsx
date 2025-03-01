import arrow_btn from '../../assets/arrow_icon.svg'
import './Collapse.scss'
import {useState} from 'react';
import PropTypes from 'prop-types';

function Collapse({ title, content }) {
    const [collapseOpened, switchCollapse] = useState(false); // false = fermé, true = ouvert

    return (                                               
        <div className="collapse">
            <div className="collapse__head">
                <h1>{title}</h1>
                <img 
                    src={arrow_btn} 
                    alt="arrow icon" 
                    onClick={() => switchCollapse(!collapseOpened)} 
                />
            </div>                                                        
            {collapseOpened && (
                <div className="collapse__content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
}
Collapse.propTypes = {
    content : PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,  
};

export default Collapse