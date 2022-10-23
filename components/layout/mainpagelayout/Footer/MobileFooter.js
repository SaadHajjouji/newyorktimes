import Image from "next/image";
import React, { useState } from "react";
import classes from "./MobileFooter.module.scss";
const MobileFooter = () => {
  const FooterContent = [
    { title: "News", sections: ["Home Page", "World", "CoronaVirus"] },
    { title: "Arts", sections: ["Today's Arts", "Art & Design", "Books"] },
    { title: "Living", sections: ["Automotive", "Games", "Education"] },
    { title: "live", sections: ["Automoti", "Game", "Educati"] },
  ];
  const [element, setElement] = useState();
  const showElement = (title) => {
    if (element === title) {
      setElement("");
    } else setElement(title);
  };
  return (
    <div className={classes.mobileFooterWrapper}>
      <Image
        src={"/images/NewYorkTimes.svg"}
        alt="newyorktimes logo"
        width={200}
        height={28.5714}
      />
      {FooterContent.map((content) => (
        <div className={classes.MobileFooter} key={content.title}>
          <h3 onClick={() => showElement(content.title)}>{content.title}</h3>
          <ul
            className={
              element === content.title
                ? classes.normalHeight
                : classes.zeroHeight
            }
          >
            {content.sections.map((section) => (
              <li key={section[0]}>{section}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MobileFooter;
