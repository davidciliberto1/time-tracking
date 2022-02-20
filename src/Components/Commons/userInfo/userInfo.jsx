import React from 'react';
import UserImg from '../../../Assets/images/image-jeremy.png';

const UserInfo = () => {
  return (
    <div className="userInfo">
        <img src={UserImg} alt="" />
        <h4>report for</h4><br />
        <h1>Jeremy Robson</h1>
    </div>
    )
}

export default UserInfo;