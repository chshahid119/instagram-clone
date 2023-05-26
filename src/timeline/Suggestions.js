import React from "react";
import "./Suggestions.css";
// import Timelines from './Timelines'
import { Avatar } from "@mui/material";

function Suggestions(profile) {
  return (
    <>
      <div className="suggestions">
        <div className="suggestions__title">Suggestions for you</div>
      </div>

      <div className="suggestion__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Shahid</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>

      <div className="suggestion__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Ali</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>

      <div className="suggestion__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Amina</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>

      <div className="suggestion__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Subhan</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="footerMenu">
        
          <ul className="menu__list">
            <li>
              <a href="https://about.instagram.com/">About -</a>
            </li>
            <li>
              <a href="https://help.instagram.com/">Help -</a>
            </li>
            <li>
              <a href="https://about.instagram.com/en_US/blog">Press -</a>
            </li>
            <li>
              <a href="https://about.instagram.com/about-us/careers">API -</a>
            </li>
            <li>
              <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect">
                Jobs -
              </a>
            </li>
            <li>
              <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect">
                Privacy -
              </a>
            </li>
            <li>
              <a href="https://help.instagram.com/581066165581870/">Terms -</a>
            </li>
            <li>
              <a href="https://www.instagram.com/explore/locations/">
                Locations
              </a>
            </li>
          </ul>
          </div>
        
      </div>
    </>
  );
}

export default Suggestions;
