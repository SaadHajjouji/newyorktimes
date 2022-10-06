import { Fragment } from "react";
import MainPageHeader from "./MainPageHeader";

const MainPageLayout = (props) => {
  return (
    <Fragment>
      <MainPageHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default MainPageLayout;
