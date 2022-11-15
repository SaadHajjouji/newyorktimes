import { FaSearch } from "react-icons/fa";
import classes from "./ShowInputButton.module.scss"
const ShowInputButton = ({setShowSearchInput,showSearchInput}) => {
  return (
    <>
      <button
        className={
          showSearchInput
            ? `${classes.backgroundColorClicked} ${classes.btnShowSearch}`
            : classes.btnShowSearch
        }
        onClick={() => setShowSearchInput(!showSearchInput)}
      >
        <FaSearch />
      </button>
    </>
  );
};

export default ShowInputButton;
