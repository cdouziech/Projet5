import './card.scss';

function Card(card_img_path,card_alt,card_title){
    return(
        <div className='cardContainer'>
            <img src={card_img_path} alt={card_alt} />
            <div className='cardShadow'></div>
            <p>{card_title}</p>
        </div>
    );
}

export default Card