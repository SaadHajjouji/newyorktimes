import { Fragment } from "react";
import DesktopFooter from "./Footer/DesktopFooter";
import MobileFooter from "./Footer/MobileFooter";
import MainPageHeader from "./Header/MainPageHeader";

const MainPageLayout = (props) => {
  return (
    <Fragment>
      <MainPageHeader />
      <main>{props.children}</main>
      <DesktopFooter />
      <MobileFooter />
    </Fragment>
  );
};

export default MainPageLayout;
