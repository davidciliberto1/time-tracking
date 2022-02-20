import React from 'react'
import UserInfo from './Components/Commons/userInfo/userInfo';
import Time from './Components/Commons/time/time';

const TimeTracker = () => {
  return (
    <div className="timeTracker">
      <div className="timeList">
        <UserInfo />
        <Time />
      </div>
      <div className="tracker"></div>

    </div>
  )
}

export default TimeTracker;