import Image from "next/image";
import classes from "./MobileHeaderSection.module.scss";
import { FaBars, FaUser } from "react-icons/fa";
const MobileHeaderSection = ({todayDate,setShowMobileNavigation}) => {
  return (
    <section className={classes.mobileHeader}>
      <div className={classes.HeaderTopSectionPhone}>
        <FaBars onClick={() => setShowMobileNavigation(true)} />
        <Image
          src={"/images/NewYorkTimes.svg"}
          alt="newyorktimes logo"
          width={220}
          height={31.42}
        />

        <FaUser />
      </div>
      <div className={classes.HeaderBottomSectionPhone}>
        <span className={`${classes.date} ${classes.date1}`}>{todayDate}</span>
        <span className={`${classes.date} ${classes.date2}`}>{todayDate}</span>
        <a>SUBSCRIBE FOR $0.25/WEEK</a>
      </div>
    </section>
  );
};

export default MobileHeaderSection;
