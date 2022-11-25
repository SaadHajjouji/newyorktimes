import React from "react";
import Image from "next/image";
import { FooterContent } from "./FooterContent";
import classes from "./FooterDesktop.module.scss";

const DesktopFooter = ({sections,setLoading}) => {
  return (
    <footer className={classes.DesktopFooter}>
      <hr className={`${classes.line} ${classes.line1}`} />
      <hr className={`${classes.line} ${classes.line2}`} />
   <div className={classes.DesktopFooterContent}>
   <Image
        src={"/images/NewYorkTimes.svg"}
        alt="newyorktimes logo"
        width={200}
        height={28.5714}
      />
      <div className={classes.FooterWrapper}>
        <FooterContent sections={sections} setLoading={setLoading}/>
      </div>
   </div>
    </footer>
  );
};

export default DesktopFooter;
