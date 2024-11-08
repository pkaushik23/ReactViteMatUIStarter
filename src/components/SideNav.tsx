import React from 'react';
import { IconButton, Avatar } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


interface SideNavProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div className={`side-nav ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="side-nav-header">
        {/* Toggle IconButton */}
        <IconButton onClick={toggleSidebar} color="inherit">
          {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>

        {/* Avatar - Inline when expanded, below when collapsed */}
        <Avatar alt="User Avatar" src="/path-to-avatar.jpg" 
                sx={{ width: 30, height: 30 }}
                className={`avatar ${isCollapsed ? 'collapsed-avatar' : 'expanded-avatar'}`} />
      </div>
      <div className="side-nav-body">
        <ul>
          <li><a><span className="icon">🏠</span>{!isCollapsed && <span>Home</span>}</a></li>
          <li><span className="icon">📄</span>{!isCollapsed && <span>Documents</span>}</li>
          <li><span className="icon">⚙️</span>{!isCollapsed && <span>Settings</span>}</li>
        </ul>
      </div>
      <div className="side-nav-footer">
        <span className="icon">🔒</span>{!isCollapsed && <span>Logout</span>}
      </div>
    </div>
  );
};

export default SideNav;
