import classes from "./SideNavigation.module.scss";
import triggerLazyLoad from "../../../helpers/triggerLazyLoad";
import { useRouter } from "next/router";
const SideNavigation = ({ showSideNavDesktop, sections, setLoading }) => {
  const router = useRouter();

  return (
    <nav
      className={
        showSideNavDesktop ? `${classes.DesktopSideNavigation}` : classes.hide
      }
    >
      {sections === "" ? (
        ""
      ) : (
        <ul>
          {sections?.map((category) => (
            <li
              key={category}
              onClick={() => triggerLazyLoad(setLoading, category, router)}
            >
              <a>{category}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default SideNavigation;
