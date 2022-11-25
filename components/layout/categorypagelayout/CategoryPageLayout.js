import React, { Fragment } from "react";
import CategoryPageHeader from "../Header/CategoryPageHeader/CategoryPageHeader";
import DesktopFooter from "../Footer/DesktopFooter";
import MobileFooter from "../Footer/MobileFooter";
const CategoryPageLayout = ({
  children,
  showSideNavDesktop,
  setshowSideNavDesktop,
  category,
  sections,
}) => {
  return (
    <Fragment>
      <CategoryPageHeader
        showSideNavDesktop={showSideNavDesktop}
        setshowSideNavDesktop={setshowSideNavDesktop}
        category={category}
        sections={sections}
      />
      <main>{children}</main>
      <DesktopFooter sections={sections} />
      <MobileFooter sections={sections} />
    </Fragment>
  );
};

export default CategoryPageLayout;
