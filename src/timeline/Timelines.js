import React, {useState} from 'react'
import Suggestions from './Suggestions';
import './Timeline.css';
import Post from '../posts/Post';
import Stories from './Stories';

function Timelines() {
  const [posts,setPosts]=useState([
    {
      profile: "https://i.pinimg.com/736x/9e/8a/d0/9e8ad033c324aa26d44c6d67cb898903.jpg",
      user:'Shahid',
      postImage:"https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_1280.jpg",
      likes:12,
      timestamp:"2d"
    },
    {
      profile: "https://i.pinimg.com/736x/9e/8a/d0/9e8ad033c324aa26d44c6d67cb898903.jpg",
      user:'Ahmad',
      postImage:"https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_640.jpg",
      likes:30,
      timestamp:"5d"
    },
    {
      profile: "https://i.pinimg.com/736x/9e/8a/d0/9e8ad033c324aa26d44c6d67cb898903.jpg",
      user:'Lyba',
      postImage:"https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_1280.jpg",
      likes:20,
      timestamp:"5h"
    },
    {
      profile: "https://i.pinimg.com/736x/9e/8a/d0/9e8ad033c324aa26d44c6d67cb898903.jpg",
      user:'Faheem',
      postImage:"https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_1280.jpg",
      likes:30,
      timestamp:"5d"
    },
    {
      profile: "https://i.pinimg.com/736x/9e/8a/d0/9e8ad033c324aa26d44c6d67cb898903.jpg",
      user:'Ayesha',
      postImage:"https://cdn.pixabay.com/photo/2020/05/03/07/43/green-5124174_1280.jpg",
      likes:90,
      timestamp:"10d"
    },
  ]);
  return (
    <>
    <div className='timeline'>
      <div className='timeline__left'>
      <div className='stories__section'>
      <Stories border='3px solid yellow'
       profile='https://instafinstahd.io/wp-content/themes/instafinstahd/assets/images/3.png'/>
      <Stories 
         profile='https://i.pinimg.com/736x/e6/5b/87/e65b87827d6594427c45501223a71735.jpg'
      />
      <Stories 
         profile='https://i.pinimg.com/736x/e6/5b/87/e65b87827d6594427c45501223a71735.jpg'
      />
      <Stories 
         profile='https://i.pinimg.com/736x/e6/5b/87/e65b87827d6594427c45501223a71735.jpg'
      />
      <Stories 
         profile='https://i.pinimg.com/736x/e6/5b/87/e65b87827d6594427c45501223a71735.jpg'
      />
      <Stories 
         profile='https://i.pinimg.com/736x/e6/5b/87/e65b87827d6594427c45501223a71735.jpg'
      />
      </div>
        <div 
         profile='https://i.pinimg.com/736x/e6/5b/87/e65b87827d6594427c45501223a71735.jpg'>
        {
          posts.map(post=>{
            return(
              <Post user={post.user} postImage={post.postImage}
              likes={post.likes} timestamp={post.timestamp}
              profile={post.profile}
            />
            )
            
          })
        }
         
        </div>
      </div>
      <div className='timeline__right'>
        <Suggestions/>
      </div>
    </div>
          </>
  )
}

export default Timelines
