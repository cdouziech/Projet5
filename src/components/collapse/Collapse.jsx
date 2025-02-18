import arrow_btn from 'C:/openclassroom/P5/Projet5/src/assets/arrow_icon.svg'
import './Collapse.scss'
import { useState} from 'react';
import PropTypes from 'prop-types';

function Collapse({title,content}){
    const [collapseOpened, switchCollapse] = useState(0); // collapseOpened is either 1
                                                          // or 0 depending if the collapse
    return(                                               // is in fact opened
        <div className="collapse">
            <div className="collapse__head">
                <h1>{title}</h1>
                <img src={arrow_btn} alt="arrow icon" onClick={() => switchCollapse(1 - collapseOpened)}/>
            </div>
            <div className="collapse__content">
                <p>{content}</p>
            </div>
        </div>
    );
}
Collapse.propTypes = {
    content : PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,  
};

export default Collapse