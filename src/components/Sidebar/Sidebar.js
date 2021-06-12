import React from 'react';
import './Sidebar.css';

function Sidebar(props) {

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }

    return (
        <>
        <div className="sidebar-details">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul className="sidebar-list">
            <li>
              <a href="/">Tops</a>
            </li>
      
            <li>
              <a href="/">Bottoms</a>
            </li>
      
          </ul>
        </div>
        </>
    )
}

export default Sidebar;