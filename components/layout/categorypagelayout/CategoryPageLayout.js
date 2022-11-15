import React, { Fragment } from "react";
import CategoryPageHeader from "../Header/CategoryPageHeader/CategoryPageHeader";

const CategoryPageLayout = ({
  children,
  showSideNavDesktop,
  setshowSideNavDesktop,
}) => {
  return (
    <Fragment>
      <CategoryPageHeader
        showSideNavDesktop={showSideNavDesktop}
        setshowSideNavDesktop={setshowSideNavDesktop}
      />
      <main>{children}</main>
    </Fragment>
  );
};

export default CategoryPageLayout;
