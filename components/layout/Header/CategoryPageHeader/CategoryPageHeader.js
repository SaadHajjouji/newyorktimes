import Image from "next/image";
import { useRef, useState } from "react";
import MenuButton from "../../../ui/MenuButton";
import SearchInput from "../../../ui/SearchInput";
import ShowInputButton from "../../../ui/ShowInputButton";
import classes from "./CategoryPageHeader.module.scss";
import SubsLoginBtns from "../../../ui/SubsLoginBtns";
import MobileHeaderSection from "../MobileHeaderSection";
import MobileNavigationSection from "../MobileNavigationSection";
import SideNavigation from "../SideNavigation";
const CategoryPageHeader = ({
  showSideNavDesktop,
  setshowSideNavDesktop,
  category,
  sections,
  setLoading,

}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [ShowMobileNavigation, setShowMobileNavigation] = useState(false);

  const searchInputRef1 = useRef();
  const searchInputRef2 = useRef();
  const todayDate = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header>
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
              searchInputRef={searchInputRef1}
              showSearchInput={showSearchInput}
            />
          </div>
          <div className={classes.categoryName}>
            {!showSearchInput ? category : ""}
          </div>
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
      <MobileNavigationSection
        searchInputRef2={searchInputRef2}
        ShowMobileNavigation={ShowMobileNavigation}
        setShowMobileNavigation={setShowMobileNavigation}
        sections={sections}
        setLoading={setLoading}
      

      />
      <SideNavigation
        showSideNavDesktop={showSideNavDesktop}
        sections={sections}
        setLoading={setLoading}
      

      />
    </header>
  );
};

export default CategoryPageHeader;
