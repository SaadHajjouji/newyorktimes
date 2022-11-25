import Image from "next/image";
import { useRouter } from "next/router";
import classes from "./MobileFooter.module.scss";
import triggerLazyLoad from "../../../helpers/triggerLazyLoad";
const MobileFooter = ({ sections, setLoading }) => {
  const router = useRouter();
  if (sections == "") {
    return "";
  } else
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
            {sections?.map((category) => (
              <li
                key={category}
                onClick={() => triggerLazyLoad(setLoading, category, router)}
              >
                <a>{category}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default MobileFooter;
