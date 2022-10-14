import React from "react";
import { FooterContent } from "../Footer/FooterContent";
import classes from "./FooterMobileNav.module.scss";
const FooterMobileNav = () => {
  return (
    <footer className={classes.Navfooter}>
      <FooterContent />
    </footer>
  );
};

export default FooterMobileNav;
      