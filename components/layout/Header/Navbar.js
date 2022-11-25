import { useRouter } from "next/router";
import classes from "./Navbar.module.scss";
import triggerLazyLoad from "../../../helpers/triggerLazyLoad";
const Navbar = ({ sections, setLoading }) => {


  const router = useRouter();

  return (
    <>
      <div className={classes.desktopNavBar}>
        <ul>
          {sections?.map((category) => (
            <li
              onClick={() => triggerLazyLoad(setLoading, category, router)}
              key={category}
            >
              <a>{category}</a>
            </li>
          ))}
        </ul>
        <hr className={`${classes.line} ${classes.line1}`} />
        <hr className={classes.line} />
      </div>
    </>
  );
};

export default Navbar;
