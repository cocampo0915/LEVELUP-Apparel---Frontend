import React from 'react';

function Sidebar(props) {

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }

    return (
        <>
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="index.html">Tops</a>
          </li>
    
          <li>
            <a href="index.html">Bottoms</a>
          </li>
    
        </ul>
        </>
    )
}

export default Sidebar;