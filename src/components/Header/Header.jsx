import React from "react";
import { Search, Bell } from "lucide-react";
import { FaPlusCircle } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Dashboard.</h1>
        <div className="search-bar">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            disabled
          />
        </div>
        <Bell size={20} className="header-icon" />
      </div>
      <div className="header-right">
        
       
        <div className="user-profile">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="User avatar"
            className="avatar"
          />
          <span className="user-name">Jane Doe</span>
      
 
          <FaPlusCircle size={24} />
        </div>
      </div>
    </header>
  );
}
