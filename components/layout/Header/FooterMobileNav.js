import { useRouter } from "next/router";
import classes from "./FooterMobileNav.module.scss";
import triggerLazyLoad from "../../../helpers/triggerLazyLoad";
const FooterMobileNav = ({ setShowMobileNavigation, sections, setLoading }) => {
  const router = useRouter();

  return (
    <footer className={classes.Navfooter}>
      {sections == "" ? (
        ""
      ) : (
        <>
          {sections?.map((category) => (
            <div key={category}>
              <a onClick={() => triggerLazyLoad(setLoading, category, router)}>
                <h3 onClick={() => setShowMobileNavigation(false)}>
                  {category}
                </h3>
              </a>
            </div>
          ))}
        </>
      )}
    </footer>
  );
};

export default FooterMobileNav;
