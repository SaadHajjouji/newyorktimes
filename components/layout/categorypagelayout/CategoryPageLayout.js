import React, { Fragment } from "react";

const CategoryPageLayout = ({ children }) => {
  return (
    <Fragment>
      <main>{children}</main>
    </Fragment>
  );
};

export default CategoryPageLayout;
