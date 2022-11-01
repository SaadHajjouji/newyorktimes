import { Fragment } from "react";
import DesktopFooter from "../../../components/layout/mainpagelayout/Footer/DesktopFooter";
import MobileFooter from "../../../components/layout/mainpagelayout/Footer/MobileFooter";
import MainPageHeader from "./Header/MainPageHeader";

const MainPageLayout = (props) => {
  return (
    <Fragment>
      <MainPageHeader />
      <main>{props.children}</main>
      {/* <DesktopFooter />
      <MobileFooter /> */}
    </Fragment>
  );
};

export default MainPageLayout;
