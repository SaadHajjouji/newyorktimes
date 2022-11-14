
import classes from "./SideNavigation.module.scss"
const SideNavigation = ({showSideNavDesktop}) => {
  return (
    <nav
      className={
        showSideNavDesktop ? `${classes.DesktopSideNavigation}` : classes.hide
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
  );
};

export default SideNavigation;
