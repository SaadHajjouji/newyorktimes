import React from "react";
import MainPageHeader from "./MainPageHeader";

const MainPageLayout = (props) => {
  return (
    <div>
      <MainPageHeader />
      <main>{props.children}</main>
    </div>
  );
};

export default MainPageLayout;
