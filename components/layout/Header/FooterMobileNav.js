import Link from "next/link";
import React, { useEffect, useState } from "react";
import getTitles from "../../../helpers/dataCenter";
import classes from "./FooterMobileNav.module.scss";
const FooterMobileNav = ({ setShowMobileNavigation }) => {
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
    <footer className={classes.Navfooter}>
      {sections == "" ? (
        ""
      ) : (
        <>
          {sections?.map((el) => (
            <div key={el}>
              <Link href={`/categories/${el}`}>
                <a>
                  <h3 onClick={() => setShowMobileNavigation(false)}>{el}</h3>
                </a>
              </Link>
            </div>
          ))}
        </>
      )}
    </footer>
  );
};

export default FooterMobileNav;
