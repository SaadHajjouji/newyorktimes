import { useRef, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import classes from "./MainPageHeader.module.scss";

const MainPageHeader = () => {
  // state of search input visibility
  const [showSearchInput, setShowSearchInput] = useState(false);
  // clear input on click
  //input reference
  const searchInputRef = useRef();
  // function that clears the input
  const clearSearchInput = (e) => {
    e.preventDefault();
    searchInputRef.current.value = "";
  };
  return (
    <header>
      <section className={classes.topHeader}>
        <div className={classes.topNavigation}>
          <button>
            <FaBars />
          </button>
          <button
            className={classes.btnShowSearch}
            onClick={() => setShowSearchInput(!showSearchInput)}
          >
            <FaSearch />
          </button>
          <div className={showSearchInput ? classes.show : classes.hide}>
            <form className="">
              <div className={classes.searchInputAndClearButton}>
                <input
                  className={classes.searchInput}
                  placeholder="SEARCH"
                  ref={searchInputRef}
                />
                <button
                  className={classes.clearInputbtn}
                  onClick={clearSearchInput}
                >
                  clear
                </button>
              </div>
              <button className={classes.btnSearch}>GO</button>
            </form>
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
      </section>
    </header>
  );
};

export default MainPageHeader;
