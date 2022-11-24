import classes from "./SideNavigation.module.scss";
import getTitles from "../../../helpers/dataCenter";
import { useEffect, useState } from "react";
import Link from "next/link";
const SideNavigation = ({ showSideNavDesktop }) => {
  const [sections, setSections] = useState("");
  useEffect(() => {
    getTitles()
      .then((data) => {
        setSections(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          {sections?.map((el) => (
            <li key={el}>
              <Link href={`/categories/${el}`}>
                <a>{el}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default SideNavigation;
