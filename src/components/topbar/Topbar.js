import React from "react";
import "./topbar.css";
import {
  Search,
  Person,
  Chat,
  Notifications,
  AccountCircle,
} from "@material-ui/icons";
import HeaderOptions from "../headerOptions/HeaderOptions";
function Topbar() {
  return (
    <div className="topbar__container">
      <div className="topbar__left">
        <span className="topbar__logo">ChaBook</span>
      </div>
      <div className="topbar__center">
        <div className="topbar__searchbar">
          <Search className="topbar__searchIcon" />
          <input
            type="text"
            className="topbar__searchInput"
            placeholder="Search for post,video or Person"
          />
        </div>
      </div>
      <div className="topbar__right">
        <div className="topbar__links">
          <span className="topbar__link">Home</span>
          <span className="topbar__link">Timeline</span>
        </div>

        <div className="topbar__icons">
          <HeaderOptions Icon={Person} title="" notcount="05" />
          <HeaderOptions Icon={Chat} title="" notcount="10" />
          <HeaderOptions Icon={Notifications} title="" notcount="15" />
          <HeaderOptions avatar="https://media-exp1.licdn.com/dms/image/C5603AQHxCcsL2XHUIw/profile-displayphoto-shrink_100_100/0/1516587331092?e=1626307200&v=beta&t=sOFlEn5L_PUs4e2KnLfYIKwlX_a-KXfVjFvMfUOWELU" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
