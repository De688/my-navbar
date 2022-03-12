import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { FaBars ,FaTimes } from 'react-icons/fa';
import './navbar.css';
import { navbardata } from './navbardata';


function Navbar({pushcontent,notpushcontent}) {
    const [Sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
      setSidebar(!Sidebar);
      pushcontent()
    };


  return (
    <>
      <div className='navbar-container'>
          <Link to='#' >
            <FaBars className='bar-icon' onClick={showSidebar}/>
          </Link>
         


      </div>
      <nav className={Sidebar ? 'nav-menu-active' : 'nav-menu'} onClick={Sidebar ? notpushcontent : pushcontent}>
          <ul className='navbar-links' onClick={showSidebar}>
           <li className='first-li'>
            <Link to="#" className='navbar-toggle2'>
              <FaTimes />
            </Link>
            </li>
            {navbardata.map((data,key) => {
              return (
                <li key={key} className={data.classname}>
                  <Link to={data.path}>
                    {data.icon}
                    <span>{data.name}</span>
                    </Link>
                  </li>
              )
            }
                 
            )}
          </ul>
      </nav> 
      
    </>
  );
}

export default Navbar;
