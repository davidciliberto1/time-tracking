import React from 'react';
import './profileCard.css';
import profilePic from '../../../Assets/images/image-jeremy.png';

const ProfileCard = () => {
    return (
        <div className='containerProfileCard'>
            <div className='profileCard'>
                <div className='profile'>
                    <img className='profilePic' src={profilePic} alt='alter' /><br />
                    <div className='profileInfo'><p className='titleName' >Report for</p>
                    <h4 className='name' >Jeremy</h4>
                    <h4 className='lastName' >Robson</h4>
                    </div>
                </div>
                <div className='recurrenceForAlertContainer'>
                    <a className='daily' href="/">Daily</a>
                    <br />
                    <a className='weekly' href="/">Weekly</a>
                    <br />
                    <a className='monthly' href="/">Monthly</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
