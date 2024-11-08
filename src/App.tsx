import React, { useState } from 'react';

import SideNav from './components/SideNav';
import Stage from './components/Stage';

const App: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <SideNav isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

      {/* Stage (Main Content) */}
      <Stage />
    </div>
  );
};

export default App;
