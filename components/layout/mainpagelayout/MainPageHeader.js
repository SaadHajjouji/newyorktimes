import { useRef, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import classes from "./MainPageHeader.module.scss";

const MainPageHeader = () => {
  // state of search input visibility
  const [showSearchInput, setShowSearchInput] = useState(false);
  // state of pressed key in search input
  const [keyPressed, setKeyPressed] = useState(false);
  // state of menu click
  const [showMenu, setShowMenu] = useState(false);
  //input reference
  const searchInputRef = useRef();
  // function that clears the input
  const clearSearchInput = (e) => {
    e.preventDefault();
    searchInputRef.current.value = "";
    setKeyPressed(false);
  };
  // checking if a key was pressed to either hide or show the clear button
  const onKeyPress = () => {
    searchInputRef.current.value === ""
      ? setKeyPressed(false)
      : setKeyPressed(true);
  };
  // show input/ delete the clear button / empty input
  const SearchInputshow = (e) => {
    clearSearchInput(e);
    setShowSearchInput(!showSearchInput);
  };
  return (
    <header>
      <section className={classes.topHeader}>
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
            <FaBars />
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
            <form className="">
              <div className={classes.searchInputAndClearButton}>
                <input
                  className={classes.searchInput}
                  placeholder="SEARCH"
                  ref={searchInputRef}
                  onChange={onKeyPress}
                />
                <button
                  className={classes.clearInputbtn}
                  // className={classes.clearInputbtn}
                  onClick={clearSearchInput}
                >
                  {keyPressed ? "clear" : ""}
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
