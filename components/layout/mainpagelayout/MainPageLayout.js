import { Fragment } from "react";
import DesktopFooter from "../../../components/layout/mainpagelayout/Footer/DesktopFooter";
import MobileFooter from "../../../components/layout/mainpagelayout/Footer/MobileFooter";
import MainPageHeader from "./Header/MainPageHeader";

const MainPageLayout = ({ content, children }) => {
  return (
    <Fragment>
      <MainPageHeader />
      <main>{children}</main>
      <DesktopFooter />
      <MobileFooter />
    </Fragment>
  );
};

export default MainPageLayout;
