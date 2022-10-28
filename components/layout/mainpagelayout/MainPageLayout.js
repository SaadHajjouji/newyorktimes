import { Fragment } from "react";

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
