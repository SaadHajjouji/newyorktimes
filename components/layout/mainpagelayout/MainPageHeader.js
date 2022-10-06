import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import classes from "./MainPageHeader.module.scss";
const MainPageHeader = () => {
  return (
    <header>
      <section className={classes.topHeader}>
        <div className={classes.topNavigation}>
          <button>
            <FaBars />
          </button>
          <button>
            <FaSearch />
          </button>
          <div>
            <form className={classes.hide}>
              <input />
              <button>GO</button>
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
          <a>SUBSCRIBE</a>
          <a>LOG IN</a>
        </div>
      </section>
    </header>
  );
};

export default MainPageHeader;
