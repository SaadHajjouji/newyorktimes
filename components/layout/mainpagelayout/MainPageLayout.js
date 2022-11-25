import { Fragment } from "react";
import DesktopFooter from "../Footer/DesktopFooter";
import MobileFooter from "../Footer/MobileFooter";
import MainPageHeader from "../Header/MainPageHeader/MainPageHeader";

const MainPageLayout = ({
  children,
  showSideNavDesktop,
  setshowSideNavDesktop,
  showMenuBtn,
  setShowMenuBtn,
  sections,
  setLoading,
}) => {
  return (
    <Fragment>
      <MainPageHeader
        showSideNavDesktop={showSideNavDesktop}
        setshowSideNavDesktop={setshowSideNavDesktop}
        showMenuBtn={showMenuBtn}
        setShowMenuBtn={setShowMenuBtn}
        sections={sections}
        setLoading={setLoading}
      />
      <main>{children}</main>
      <DesktopFooter sections={sections} setLoading={setLoading} />
      <MobileFooter sections={sections} setLoading={setLoading} />
    </Fragment>
  );
};

export default MainPageLayout;
