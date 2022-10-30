
import Link from "next/link";

import classes from "./Navbar.module.scss";
const Navbar = () => {
  const categories = [
    "world",
    "politics",
    "business",
    "opinion",
    "tech",
    "science",
    "health",
    "sports",
    "arts",
    "books",
    "food",
    "travel",
  ];

  return (
    <>
      <div className={classes.desktopNavBar}>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/categories/${category}`}>{category}</Link>
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
