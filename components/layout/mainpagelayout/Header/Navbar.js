import Link from "next/link";
import React from "react";
import classes from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={classes.desktopNavBar}>
      <ul>
        <li>
          <Link href={`/${1}`}>news</Link>
        </li>
       
      </ul>
    </div>
  );
};

export default Navbar;
