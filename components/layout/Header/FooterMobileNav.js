import React from "react";
import { FooterContent } from "../Footer/FooterContent";
import classes from "./FooterMobileNav.module.scss";
const FooterMobileNav = ({setShowMobileNavigation}) => {
  return (
    <footer className={classes.Navfooter}>
      <FooterContent setShowMobileNavigation={setShowMobileNavigation} />
    </footer>
  );
};

export default FooterMobileNav;
