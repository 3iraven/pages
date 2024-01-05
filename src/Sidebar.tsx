import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FaPersonChalkboard } from "react-icons/fa6";


import { VscTools } from "react-icons/vsc";
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
         BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

// Define the type for the props
type SidebarProps = {
  openSidebarToggle: boolean;
  OpenSidebar: () => void; // Assuming OpenSidebar is a function that takes no arguments and returns nothing
};

const Sidebar: React.FC<SidebarProps> = ({ openSidebarToggle, OpenSidebar }) => {

    const navigate = useNavigate();

  return (

    
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <VscTools className='icon_header'/> LAB ASSETS
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
        <li className='sidebar-list-item' onClick={() => navigate('/')}>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>

            <li className='sidebar-list-item' onClick={() => navigate('/assets')}>
            <a href="">
                    <BsFillArchiveFill className='icon'/> Assets
                </a>
            </li>
            <li className='sidebar-list-item' onClick={()=> navigate('/license')}>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Licenses
                </a>
            </li>
            <li className='sidebar-list-item' onClick={() => navigate('/license')}>
                <a href="">
                    <BsPeopleFill className='icon'/> Employees
                </a>
            </li>
            <li className='sidebar-list-item' onClick={() => navigate('/employee')}>
                <a href="">
                    <BsListCheck className='icon'/> Leases
                </a>
            </li>


            <li className='sidebar-list-item' onClick={() => navigate('/report')}>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>

            <li className='sidebar-list-item' onClick={() => navigate('/employee')}>
                <a href="">
                    <FaPersonChalkboard className='icon'/> Add New Employee 
                </a>
            </li>



            <li className='sidebar-list-item' onClick={() => navigate('/setting')}>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  );
};

export default Sidebar;
