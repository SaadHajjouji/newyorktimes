import Image from "next/image";
import React from "react";
import ImageCaption from "../ui/ImageCaption";
import classes from "./Main.module.scss";
const MainPage = ({ content }) => {
  const globalData = content.results;
  const opinionData = globalData.filter((data) => data.section === "opinion");
  const artsData = globalData.filter((data) => data.section === "arts");
  const worldDataSection = globalData.filter(
    (data) => data.section === "world"
  )[0];
  const worldData = globalData.filter((data) => data.section === "world");
  const usData = globalData.filter((data) => data.section === "us");
  const elections = globalData
    .filter((data) => data.subsection === "elections")
    .filter((el, i) => i < 2);
  console.log(elections);
  const featuredWorld = {
    title: worldDataSection.title,
    abstract: worldDataSection.abstract,
    image: worldDataSection.multimedia[1].url,
    width: worldDataSection.multimedia[1].width,
    height: worldDataSection.multimedia[1].height,
    caption: worldDataSection.multimedia[1].caption,
    url: worldDataSection.url,
    date: worldDataSection.published_date,
  };
  return (
    <div>
      <div className={classes.generalLayout}>
        <div className={classes.leftSection}>
          <article className={classes.worldArticle}>
            <div className={classes.trendingTopic}>
              <div>
                <span className={classes.live}>LIVE</span>
                <h3>{featuredWorld.title}</h3>
                <p>{featuredWorld.abstract}</p>
              </div>
              <ImageCaption
                featuredImg={featuredWorld.image}
                caption={featuredWorld.caption}
                width={featuredWorld.width}
                height={featuredWorld.height}
              />
            </div>
            <div className={classes.electionsSection}>
              {elections.map((election) => (
                <h3 key={election.title}>{election.title}</h3>
              ))}
            </div>
          </article>
        </div>
        <div className={classes.rightSection}>ll</div>
      </div>
    </div>
  );
};

export default MainPage;
