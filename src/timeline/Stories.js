import React from 'react'
import Timelines from './Timelines';
import './Stories.css';


function Stories(props) {
  return (
    <div className='story__section'>
      <div className='stories'>
        <img src={props.profile} alt=''/>
      </div>
    </div>
  )
}

export default Stories
