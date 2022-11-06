import Link from "next/link";
import { useEffect, useState } from "react";
import getTitles from "../../../../helpers/dataCenter";
import classes from "./Navbar.module.scss";
const Navbar = () => {
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
  console.log(sections);

  if (sections !== "")
    return (
      <>
        <div className={classes.desktopNavBar}>
          <ul>
            {sections?.map((category) => (
              <li key={category}>
                <a>
                  <Link href={`/categories/${category}`}>{category}</Link>
                </a>
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
