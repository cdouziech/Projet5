import arrow_btn from '../../assets/arrowIcon.png'
import './Collapse.scss'
import {useState} from 'react';
import PropTypes from 'prop-types';

function Collapse({ title, content }) {
    const [collapseOpened, switchCollapse] = useState(false); // false = fermé, true = ouvert
    console.log(collapseOpened);
    return (                                               
        <div className="collapse">
            <div className="collapse__head">
                {title}
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
}         // display le content de manière permanente pour pouvoir animer au retour
Collapse.propTypes = {
    content : PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,  
};

export default Collapse