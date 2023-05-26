import React from 'react'
import './Homepage.css';
import Sidenav from './navigation/Sidenav'
import Timelines from './timeline/Timelines';

function Homepage() {
  return (
    <div className='homepage'>
      <div className='homepage__nav'><Sidenav/></div>
      <div className='homepage__timeline'><Timelines/></div>
    </div>
  )
}

export default Homepage
