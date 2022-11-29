import React from "react";
import Image from "next/image";
import SearchInput from "../../ui/SearchInput";
import FooterMobileNav from "./FooterMobileNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./MobileNavigationSection.module.scss";
const MobileNavigationSection = ({
  ShowMobileNavigation,
  setShowMobileNavigation,
  searchInputRef2,
  sections,
  setLoading,
  
}) => {
  return (
    <>
      <nav
        className={
          ShowMobileNavigation ? classes.MobileNavigation : classes.hide
        }
      >
        <div className={classes.navHead}>
          <div></div>
          <Image
            src={"/images/NewYorkTimes.svg"}
            alt="newyorktimes logo"
            width={220}
            height={31.42}
          />
          <FontAwesomeIcon
            className={classes.cancelIcon}
            icon={faXmark}
            onClick={() => setShowMobileNavigation(false)}
          />
        </div>
        <section className={classes.MobileNavSection}>
          <SearchInput searchInputRef={searchInputRef2} />
          <FooterMobileNav
            sections={sections}
            setShowMobileNavigation={setShowMobileNavigation}
            setLoading={setLoading}
          
          />
        </section>
      </nav>
    </>
  );
};

export default MobileNavigationSection;
