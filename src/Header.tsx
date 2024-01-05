import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

// Define the type for the props
type HeaderProps = {
  OpenSidebar: () => void; // This assumes OpenSidebar is a function that takes no arguments and returns nothing
};

const Header: React.FC<HeaderProps> = ({ OpenSidebar }) => {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch className='icon'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  );
};

export default Header;
