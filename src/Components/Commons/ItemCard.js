import React from 'react';
import './itemCard.css';
import iconWork from '../../Assets/images/icon-work.svg';

const ItemCard = () => {
    return (
        <div className='cardContainer'>
            <div className='backgroundCard'>
                <img className='iconWork' src={iconWork} alt='alter' /><br />
                <div className='card'>
                    <div className='headerCard'>
                        <div className='activity'>Work</div>
                        <div className='cardMenu'>...</div>
                    </div>
                    <div className='time'>4Hrs</div>
                    <div className='timeActive'>Last week - 35Hrs</div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;
