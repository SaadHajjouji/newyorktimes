import { useRef, useState } from "react";
import { FaArrowDown, FaBars, FaCloud, FaSearch, FaUser } from "react-icons/fa";
import classes from "./MainPageHeader.module.scss";
import Image from "next/image";
import SearchInput from "../../ui/SearchInput";
const MainPageHeader = () => {
  // state of menu click
  const [showMenu, setShowMenu] = useState(false);
  // state of search input visibility
  const [showSearchInput, setShowSearchInput] = useState(false);
  //input reference
  const searchInputRef = useRef();
  // state of pressed key in search input
  const [keyPressed, setKeyPressed] = useState(false);
  // show input/ delete the clear button / empty input
  const SearchInputshow = (e) => {
    clearSearchInput(e);
    setShowSearchInput(!showSearchInput);
  };
  // function that clears the input
  const clearSearchInput = (e) => {
    e.preventDefault();
    searchInputRef.current.value = "";
    setKeyPressed(false);
  };
  // state of side navigation
  const [showSideNav, setshowSideNav] = useState(false);
  return (
    <header onClickCapture={() => setshowSideNav(false)}>
      <section className={classes.desktopHeader}>
        <div className={classes.HeadertopSection}>
          <div className={classes.topNavigation}>
            <button
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className={
                showMenu
                  ? `${classes.btnMenu} ${classes.backgroundColorClicked}`
                  : classes.btnMenu
              }
            >
              <FaBars onClick={() => setshowSideNav(true)} />
            </button>
            <button
              className={
                showSearchInput
                  ? `${classes.backgroundColorClicked}  ${classes.btnShowSearch}`
                  : classes.btnShowSearch
              }
              onClick={SearchInputshow}
            >
              <FaSearch />
            </button>
            <div className={showSearchInput ? classes.show : classes.hide}>
              <SearchInput
                clearSearchInput={clearSearchInput}
                searchInputRef={searchInputRef}
                keyPressed={keyPressed}
                setKeyPressed={setKeyPressed}
              />
            </div>
          </div>
          <div className={classes.languageSection}>
            <ul className={classes.languages}>
              <li>
                <a>U.S.</a>
              </li>
              <li>
                <a>INTERNATIONAL</a>
              </li>
              <li>
                <a>CANADA</a>
              </li>
              <li>
                <a>ESPAÑOL</a>
              </li>
              <li>
                <a>中文</a>
              </li>
            </ul>
          </div>
          <div className={classes.subsLogin}>
            <a>SUBSCRIBE FOR $0.25/ WEEK</a>
            <a>LOG IN</a>
          </div>
        </div>
        <div className={classes.headerBottomSection}>
          <div className={classes.dateAndPaperToday}>
            <span className={classes.dateToday}>Friday, October 7, 2022</span>
            <span className={classes.todaypaperlink}>
              <a>today&apos;s paper</a>
            </span>
          </div>
          <div className={classes.logo}>
            <Image
              src={"/images/NewYorkTimes.svg"}
              alt="newyorktimes logo"
              width={800}
              height={114.24}
            />
          </div>
          <div className={classes.financeAndWeather}>
            <div className={classes.sectionWrapper}>
              <div className={classes.weatherInfo}>
                <FaCloud />
                <span>22°C</span>
                <span>18°</span>
                <span>19°</span>
              </div>
              <div className={classes.financeInfo}>
                <span>Dow</span>
                <span>
                  -3.8% <FaArrowDown />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.mobileHeader}>
        <div className={classes.HeaderTopSectionPhone}>
          <FaBars />
          <Image
            src={"/images/NewYorkTimes.svg"}
            alt="newyorktimes logo"
            width={220}
            height={31.42}
          />
          <FaUser />
        </div>
        <div className={classes.HeaderBottomSectionPhone}>
          <span className={`${classes.date} ${classes.date1}`}>
            Friday, October 7, 2022
          </span>
          <span className={`${classes.date} ${classes.date2}`}>
            Friday, October 7, 2022
          </span>
          <a>SUBSCRIBE FOR $0.25/WEEK</a>
        </div>
      </section>
      <nav
        className={
          showSideNav ? `${classes.DesktopSideNavigation}` : classes.hide
        }
      >
        <ul>
          <li>Home Page</li>
          <li>World</li>
          <li>Business</li>
          <li>U.S Politics</li>
          <li>U.S News</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainPageHeader;
