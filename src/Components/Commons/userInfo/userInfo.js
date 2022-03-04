import React from "react";
import userImg from '../../../Assets/images/image-jeremy.png';
import './userInfo.css'

const UserInfo = () => {
  return (
    <div className="userInfo">
      <img src={userImg} alt="Jeremy Robson" />
      <div className="infoContainer">
        <h4>Report for</h4>
        <h3>Jeremy Robson</h3>
      </div>
    </div>
  );
}

export default UserInfo;