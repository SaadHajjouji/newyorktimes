import Image from "next/image";
import React, { useEffect, useState } from "react";
import classes from "./MobileFooter.module.scss";
import getTitles from "../../../helpers/dataCenter";

const MobileFooter = () => {
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
    <div className={classes.mobileFooterWrapper}>
      <Image
        src={"/images/NewYorkTimes.svg"}
        alt="newyorktimes logo"
        width={200}
        height={28.5714}
      />

      <div className={classes.MobileFooter}>
        <ul>
          <li>hello</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileFooter;
