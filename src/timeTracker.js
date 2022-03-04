import React from 'react'
import UserInfo from './Components/Commons/userInfo/userInfo';
import Time from './Components/Commons/time/time';
import TabContent from './Components/Commons/TabContent/TabContent';

const TimeTracker = () => {
  return(
      <div className="timeTracker">
          <div className="timeList">
              <UserInfo />
              <Time />
          </div>

          <div className="tracker tabContainer">
              <TabContent tab="daily" className="tabContent active"/>
              <TabContent tab= "weekly" className="tabContent"/>
              <TabContent tab="monthly" className="tabContent"/>
          </div>
      </div>
  );
}

export default TimeTracker;