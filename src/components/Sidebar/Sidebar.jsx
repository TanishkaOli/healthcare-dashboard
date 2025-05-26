import React from "react";
import navigationLinks from "../../data/navigationLinks";
// Using Lucide React icons for example
import {
  Home,
  Clock,
  Calendar,
  CalendarCheck,
  BarChart2,
  Clipboard,
  MessageCircle,
  HelpCircle,
  Settings,
} from "lucide-react";
import "./Sidebar.css";

const iconMap = {
  home: <Home size={20} />,
  clock: <Clock size={20} />,
  calendar: <Calendar size={20} />,
  "calendar-check": <CalendarCheck size={20} />,
  "bar-chart": <BarChart2 size={20} />,
  clipboard: <Clipboard size={20} />,
  "message-circle": <MessageCircle size={20} />,
  "help-circle": <HelpCircle size={20} />,
  settings: <Settings size={20} />,
};

export default function Sidebar() {
  return (
    <aside className="sidebar">
     <h1 className="sidebar-heading">
  Health<span style={{ color: "black" }}>care.</span>
</h1>

      <nav className="sidebar-nav">
        <ul>
          {navigationLinks.map(({ id, name, icon }) => (
            <li key={id} className="sidebar-nav-item">
              <span className="sidebar-icon">{iconMap[icon]}</span>
              <span className="sidebar-link">{name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
