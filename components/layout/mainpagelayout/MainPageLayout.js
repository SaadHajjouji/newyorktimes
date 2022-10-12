import { Fragment } from "react";
import Footer from "./Footer";
import MainPageHeader from "./MainPageHeader";

const MainPageLayout = (props) => {
  return (
    <Fragment>
      <MainPageHeader />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default MainPageLayout;
