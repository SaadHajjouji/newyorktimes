import Image from "next/image";
import { useRef, useState } from "react";
import MenuButton from "../../../ui/MenuButton";
import SearchInput from "../../../ui/SearchInput";
import ShowInputButton from "../../../ui/ShowInputButton";
import classes from "./CategoryPageHeader.module.scss";
import SubsLoginBtns from "../../../ui/SubsLoginBtns";
import MobileHeaderSection from "../MobileHeaderSection";
const CategoryPageHeader = ({ showSideNavDesktop, setshowSideNavDesktop }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [ShowMobileNavigation, setShowMobileNavigation] = useState(false);

  const searchInputRef = useRef();
  const todayDate = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header >
      <div className={classes.headerContainer}>
        <div className={classes.section1Container}>
          <MenuButton
            showSideNavDesktop={showSideNavDesktop}
            setshowSideNavDesktop={setshowSideNavDesktop}
          />
          <ShowInputButton
            showSearchInput={showSearchInput}
            setShowSearchInput={setShowSearchInput}
          />
          <div className={showSearchInput ? classes.show : classes.hide}>
            <SearchInput
              searchInputRef={searchInputRef}
              showSearchInput={showSearchInput}
            />
          </div>
          <div>{!showSearchInput ? "Politics" : ""}</div>
        </div>
        <div className={classes.logo}>
          <Image
            src={"/images/NewYorkTimes.svg"}
            alt="newyorktimes logo"
            width={200}
            height={28.57}
          />
        </div>

        <div className={classes.sublog}>
          <SubsLoginBtns />
        </div>
      </div>
      <hr className={classes.headerUnderline}></hr>
      <MobileHeaderSection
        todayDate={todayDate}
        setShowMobileNavigation={setShowMobileNavigation}
      />
    </header>
  );
};

export default CategoryPageHeader;
