import React from "react";
import Image from "next/image";
import { FooterContent } from "./FooterContent";
import classes from "./FooterDesktop.module.scss";

const DesktopFooter = () => {
  return (
    <footer>
      <Image
        src={"/images/NewYorkTimes.svg"}
        alt="newyorktimes logo"
        width={200}
        height={28.5714}
      />
      <div className={classes.FooterWrapper}>
        <FooterContent />
      </div>
    </footer>
  );
};

export default DesktopFooter;
