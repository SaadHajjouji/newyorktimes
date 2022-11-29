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
  setLoading,
}) => {
  return (
    <Fragment>
      <CategoryPageHeader
        showSideNavDesktop={showSideNavDesktop}
        setshowSideNavDesktop={setshowSideNavDesktop}
        category={category}
        sections={sections}
        setLoading={setLoading}
      />
      <main>{children}</main>
      <DesktopFooter sections={sections} setLoading={setLoading} />
      <MobileFooter sections={sections} setLoading={setLoading} />
    </Fragment>
  );
};

export default CategoryPageLayout;
