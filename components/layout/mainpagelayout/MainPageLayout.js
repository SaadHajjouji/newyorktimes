import { Fragment } from "react";
import DesktopFooter from "../Footer/DesktopFooter";
import MobileFooter from "../Footer/MobileFooter";
import MainPageHeader from "../Header/MainPageHeader";

const MainPageLayout = ({
  children,
  showSideNavDesktop,
  setshowSideNavDesktop,
  showMenuBtn,
  setShowMenuBtn,
}) => {
  return (
    <Fragment>
      <MainPageHeader
        showSideNavDesktop={showSideNavDesktop}
        setshowSideNavDesktop={setshowSideNavDesktop}
        showMenuBtn={showMenuBtn}
        setShowMenuBtn={setShowMenuBtn}
      />
      <main>{children}</main>
      <DesktopFooter />
      <MobileFooter />
    </Fragment>
  );
};

export default MainPageLayout;
