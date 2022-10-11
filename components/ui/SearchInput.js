import classes from "./SearchInput.module.scss";

const SearchInput = ({
  clearSearchInput,
  searchInputRef,
  keyPressed,
  setKeyPressed,
}) => {
  const onKeyPress = () => {
    searchInputRef.current.value === ""
      ? setKeyPressed(false)
      : setKeyPressed(true);
  };

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
          // className={classes.clearInputbtn}
          onClick={clearSearchInput}
        >
          {keyPressed ? "clear" : ""}
        </button>
      </div>
      <button className={classes.btnSearch}>GO</button>
    </form>
  );
};

export default SearchInput;
