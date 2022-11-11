import React from "react";
import { FaBars } from "react-icons/fa";
import classes from "./MenuButton.module.scss";
const MenuButton = ({ setshowSideNavDesktop, showSideNavDesktop }) => {
  console.log(showSideNavDesktop);
  return (
    <>
      <button
        onClick={() => setshowSideNavDesktop(!showSideNavDesktop)}
        className={classes.btnMenu}
      >
        <FaBars />
      </button>
    </>
  );
};

export default MenuButton;
