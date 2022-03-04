import React, {useEffect, useState} from 'react';
import { dataTasks } from '../../../data';
import Item from '../Item/Item';
import './tabContent.css';

const TabContent = (props) => {

  return (
    <div id={props.tab} className='tabContent'>
            {dataTasks.map((item, index)=>{
               if(props.tab === 'daily'){
                 return <Item 
                 key={item.title}
                 id={item.title}
                 hours={item.timeframes.daily.current}
                 prevLog={item.timeframes.daily.previous}
                 title={item.title}/>
               } else if(props.tab === 'weekly') {
                return <Item 
                key={item.title}
                id={item.title}
                hours={item.timeframes.weekly.current}
                prevLog={item.timeframes.weekly.previous}
                title={item.title}/>
               } else if(props.tab === 'monthly') {
                return <Item 
                key={item.title}
                id={item.title}
                hours={item.timeframes.monthly.current}
                prevLog={item.timeframes.monthly.previous}
                title={item.title}/>
               }
               return  <h1>{item.title}</h1>
            })}  
    </div>
  );
}

export default TabContent;