import { FaBars, FaHome, FaFire, FaPlay, FaHistory, FaThumbsUp, FaFolder, FaUserCircle,FaYoutube } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
    console.log(isCollapsed)
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="youtube-logo">
      <FaYoutube className="youtube-icon" />
        {!isCollapsed && <span>YouTube</span>}
      </div>

      <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
        <FaBars className="hamburger-icon" />
      </button>

      <div className="sidebar-items">
        <div className="sidebar-item">
          <FaHome className="sidebar-icon" />
          {!isCollapsed && <span>Home</span>}
        </div>
        <div className="sidebar-item">
          <FaFire className="sidebar-icon" />
          {!isCollapsed && <span>Trending</span>}
        </div>
        <div className="sidebar-item">
          <FaPlay className="sidebar-icon" />
          {!isCollapsed && <span>Subscriptions</span>}
        </div>
      </div>

      <hr />

      <div className="sidebar-items">
        <div className="sidebar-item">
          <FaHistory className="sidebar-icon" />
          {!isCollapsed && <span>History</span>}
        </div>
        <div className="sidebar-item">
          <FaThumbsUp className="sidebar-icon" />
          {!isCollapsed && <span>Liked Videos</span>}
        </div>
        <div className="sidebar-item">
          <FaFolder className="sidebar-icon" />
          {!isCollapsed && <span>Your Videos</span>}
        </div>
      </div>

      <hr />

      <div className="sidebar-items">
        <div className="sidebar-item">
          <FaUserCircle className="sidebar-icon" />
          {!isCollapsed && <span>Your Channel</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;