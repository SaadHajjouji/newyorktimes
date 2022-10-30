import React from "react";
import classes from "./Main.module.scss";
const MainPage = ({ content }) => {
  const globalData = content.results;
  const opinionData = globalData.filter((data) => data.section === "opinion");
  const artsData = globalData.filter((data) => data.section === "arts");
  const WorldData = globalData.filter((data) => data.section === "world");
  const usData = globalData.filter((data) => data.section === "us");

  console.log(usData);

  return <div>hiii</div>;
};

export default MainPage;
