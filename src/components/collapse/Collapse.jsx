import arrow_btn from '../../assets/arrowIcon.png'
import './Collapse.scss'
import {useState} from 'react';
import PropTypes from 'prop-types';

function Collapse({ title, content }) {
    const [collapseOpened, switchCollapse] = useState(false); // false = fermé, true = ouvert
    return (                                               
        <div className="collapse">
            <div className="collapse__head">
                <p>{title}</p>
                <img 
                    src={arrow_btn} 
                    alt="arrow icon" 
                    onClick={() => switchCollapse(!collapseOpened)} 
                    className={`${collapseOpened ? 'opened_arrow' : ''}`}
                />
            </div>                                                        
            <div className={` collapse__content ${collapseOpened ? 'opened_content' : ''}`}>
                {content}
            </div>
        </div>
    );
}        
Collapse.propTypes = {
    content : PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,  
};

export default Collapse