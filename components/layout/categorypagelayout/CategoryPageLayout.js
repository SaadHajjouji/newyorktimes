import React, { Fragment } from "react";
import CategoryPageHeader from "../Header/CategoryPageHeader/CategoryPageHeader";

const CategoryPageLayout = ({ children }) => {
  return (
    <Fragment>
      <CategoryPageHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default CategoryPageLayout;
