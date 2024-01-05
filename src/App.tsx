// export default App;
import './App.css';
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AssetPage from './AssetPage';
import License from './LicensePage';
import EmployeeForm from './EmployeeForm';

const App: React.FC = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState<boolean>(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assets" element={<AssetPage />} />
          <Route path="/categories" element={<License />} />
          <Route path="/employee" element={<EmployeeForm />} />
          {/* ... other routes ... */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


