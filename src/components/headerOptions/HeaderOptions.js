import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOptions.css";
function HeaderOptions({ avatar, Icon, title, onClick, notcount }) {
  return (
    <div onClick={onClick} className="headerOption">
      {avatar && <Avatar className="headerOption__icon" src={avatar}></Avatar>}
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>

      {notcount && <span className="headerOption__iconBadge">{notcount}</span>}
    </div>
  );
}

export default HeaderOptions;
