import React from 'react';
import { RiComputerLine } from "react-icons/ri";
import { IoTabletPortraitOutline } from "react-icons/io5";
import { LiaMobileSolid } from "react-icons/lia";

function Navbar() {
  return (
    <header className="nav">
      <div className="nav-left">
        {/* <img src="../assets/logo.png" alt="WIX STUDIO" className="nav-logo" /> */}
        <span className="nav-title">WIX <strong>STUDIO</strong></span>
      </div>

      <div className="nav-center">
        <RiComputerLine className="icon" />
        <IoTabletPortraitOutline className="icon" />
        <LiaMobileSolid className="icon" />
      </div>

      <div className="nav-right">
        <button className="edit-btn">Edit Template</button>
      </div>
    </header>
  );
}

export default Navbar;
