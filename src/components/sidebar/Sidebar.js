import {
  Bookmark,
  ChatBubble,
  Event,
  Group,
  HelpOutlined,
  RssFeed,
  School,
  VideoLibrary,
  WorkOffOutlined,
  WorkOutlined,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const sidebarListItem = (Icon, topic) => (
    <div className="sidebarListItems">
      <div className="sidebarListItem">
        <Icon className="sidebar__listIcon" />
        <span className="sidebar__listText">{topic}</span>
      </div>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        {sidebarListItem(RssFeed, "Feed")}
        {sidebarListItem(ChatBubble, "Chats")}
        {sidebarListItem(VideoLibrary, "Videos")}
        {sidebarListItem(Group, "Groups")}
        {sidebarListItem(Bookmark, "Bookmarks")}
        {sidebarListItem(HelpOutlined, "Quections")}
        {sidebarListItem(WorkOutlined, "Jobs")}
        {sidebarListItem(Event, "Events")}
        {sidebarListItem(School, "Courses")}
      </div>
      <button className="sidebar__button">Show More</button>
      <hr className="sidebar__hr" />
    </div>
  );
}

export default Sidebar;
