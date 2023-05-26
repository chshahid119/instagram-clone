import React from "react";
import { Avatar } from "@mui/material";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Telegram from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ user, profile, postImage, likes, timestamp }) {
  return (
    
      <div className="post">
        <div className="post__header">
          <div className="post__headerAuthor">
            <Avatar>
              <img src={profile} />
            </Avatar>
            {user} - <span> {timestamp}</span>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="post__image">
          <img src={postImage} alt="" />
        </div>
        <div className="post__footer">
          <div className="post__footerIcons">
            <div className="post__iconsMain">
              <FavoriteBorderIcon className="postIcon" />
              <ChatBubbleOutlineIcon className="postIcon" />
              <Telegram className="postIcon" />
            </div>
            <div className="post__iconSave">
              <BookmarkBorderIcon className="postIcon" />
            </div>
          </div>
          Liked by {likes} people
        </div>
      </div>
   
  );
}

export default Post;
