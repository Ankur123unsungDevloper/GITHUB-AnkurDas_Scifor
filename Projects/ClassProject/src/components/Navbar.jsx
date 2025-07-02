import React, { useState } from 'react';
import { RiComputerLine } from "react-icons/ri";
import { IoTabletPortraitOutline } from "react-icons/io5";
import { LiaMobileSolid } from "react-icons/lia";
import { IoMdReturnRight } from "react-icons/io";

function Navbar() {
  const [active, setActive] = useState('desktop');

  return (
    <header className="nav">
      <div className="nav-left">
        <span className="nav-title"><strong>WIX </strong>STUDIO</span>
      </div>

      <div className="nav-center">
        <button
          className={`icon-btn ${active === 'desktop' ? 'active' : ''}`}
          onClick={() => setActive('desktop')}
        >
          <RiComputerLine />
        </button>

        <button
          className={`icon-btn ${active === 'tablet' ? 'active' : ''}`}
          onClick={() => setActive('tablet')}
        >
          <IoTabletPortraitOutline />
        </button>

        <button
          className={`icon-btn ${active === 'mobile' ? 'active' : ''}`}
          onClick={() => setActive('mobile')}
        >
          <LiaMobileSolid />
        </button>
      </div>

      <a href='/' className="nav-right">
        <div className="edit-btn">
          Edit Template
          <IoMdReturnRight className="arrow-icon" />
        </div>
      </a>
    </header>
  );
}

export default Navbar;
