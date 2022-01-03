import React from "react";
import ActionBar from "./ActionBar";
import Logo from "./Logo";
import Nav from "./Nav";
import Slider from "./Slider";
function Header() {
  return (
    <>
      <Logo/>
      <ActionBar/>
      <Nav/>
      <Slider/>
    </>
  )
}

export default Header;
