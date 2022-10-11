import { useEffect, useState } from "react";
import classes from "./SearchInput.module.scss";

const SearchInput = ({ searchInputRef, showSearchInput }) => {
  // state of pressed key in search input
  const [keyPressed, setKeyPressed] = useState(false);
  const onKeyPress = () => {
    searchInputRef.current.value === ""
      ? setKeyPressed(false)
      : setKeyPressed(true);
  };
  // function that clears the input
  const clearSearchInput = (e, inputRef) => {
    e.preventDefault();
    inputRef.current.value = "";
    setKeyPressed(false);
  };

  useEffect(() => {
    if (showSearchInput === false) {
      searchInputRef.current.value = "";
      setKeyPressed(false);
    }
  }, [showSearchInput]);
  return (
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
          onClick={(e) => clearSearchInput(e, searchInputRef)}
        >
          {keyPressed ? "clear" : ""}
        </button>
      </div>
      <button className={classes.btnSearch}>GO</button>
    </form>
  );
};

export default SearchInput;
