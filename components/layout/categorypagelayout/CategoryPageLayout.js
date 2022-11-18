import React, { Fragment } from "react";
import CategoryPageHeader from "../Header/CategoryPageHeader/CategoryPageHeader";
import DesktopFooter from "../Footer/DesktopFooter"
import MobileFooter from "../Footer/MobileFooter"
const CategoryPageLayout = ({
  children,
  showSideNavDesktop,
  setshowSideNavDesktop,
  category
}) => {
  return (
    <Fragment>
      <CategoryPageHeader
        showSideNavDesktop={showSideNavDesktop}
        setshowSideNavDesktop={setshowSideNavDesktop}
        category={category}
      />
      <main>{children}</main>
      <DesktopFooter />
      <MobileFooter />
    </Fragment>
  );
};

export default CategoryPageLayout;
