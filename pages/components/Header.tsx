import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavButton from "./NavButton";

type headerProps = {
  showNav: any;
};

function Header({ showNav }: headerProps) {
  return (
    <header className="fixed top-0 w-screen shadow-lg p-4 h-16 bg-main/80 backdrop-blur-lg z-10">
      <div className="flex justify-between mx-8">
        <a
          href=""
          className="font-bold text-xl hover:text-green-light font-title transition duration-300 flex gap-2 items-center"
        >
          <img src="images/logo.png" className="w-8 align-bottom inline" />
          TomWhitticase
        </a>
        <div className="flex justify-center items-center gap-8 font-bold font-title mobile-only:hidden">
          <NavButton onClick={null} text={"Home"} href={"#home"}></NavButton>
          <NavButton onClick={null} text={"About"} href={"#about"}></NavButton>
          <NavButton
            onClick={null}
            text={"Skills"}
            href={"#skills"}
          ></NavButton>
          <NavButton
            onClick={null}
            text={"Projects"}
            href={"#projects"}
          ></NavButton>
          <NavButton
            onClick={null}
            text={"Contact"}
            href={"#contact"}
          ></NavButton>
        </div>
        <button className="desktop-only:hidden" onClick={showNav}>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </div>
    </header>
  );
}

export default Header;
