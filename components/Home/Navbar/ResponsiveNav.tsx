"use client";

import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import Nav from "./Nav";

function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false);

const handNavShow = ()=>{
  setShowNav(true)
}

const handCloseNav = ()=>{
  setShowNav(false)
}


  return (
    <div>
      <Nav openNav={handNavShow} />
      <MobileNavbar showNav={showNav}  closeNav={handCloseNav}/>
    </div>
  );
}

export default ResponsiveNav;
