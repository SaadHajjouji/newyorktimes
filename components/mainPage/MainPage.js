import Image from "next/image";
import React from "react";
import ImageCaption from "../ui/ImageCaption";
import classes from "./Main.module.scss";
const MainPage = ({ content }) => {
  const globalData = content.results;
  const opinionData = globalData.filter((data) => data.section === "opinion");
  const EntertainmentData = globalData
    .filter(
      (data) =>
        data.section === "arts" ||
        data.section === "style" ||
        data.section === "sports"
    )
    .filter((el, i) => i < 3);
  const worldDataSection = globalData.filter(
    (data) => data.section === "world"
  )[0];
  const worldData = globalData.filter((data) => data.section === "world");
  const usData = globalData.filter((data) => data.section === "us");
  const elections = globalData
    .filter(
      (data) =>
        data.subsection === "elections" || data.subsection === "politics"
    )
    .filter((el, i) => i <= 1);

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
  const featEntertainment = [
    {
      title: EntertainmentData[0].title,
      abstract: EntertainmentData[0].abstract,
      image: EntertainmentData[0].multimedia[1].url,
      width: EntertainmentData[0].multimedia[1].width,
      height: EntertainmentData[0].multimedia[1].height,
      caption: EntertainmentData[0].multimedia[1].caption,
      url: EntertainmentData[0].url,
      date: EntertainmentData[0].published_date,
    },
    {
      title: EntertainmentData[1].title,
      abstract: EntertainmentData[1].abstract,
      image: EntertainmentData[1].multimedia[1].url,
      width: EntertainmentData[1].multimedia[1].width,
      height: EntertainmentData[1].multimedia[1].height,
      caption: EntertainmentData[1].multimedia[1].caption,
      url: EntertainmentData[1].url,
      date: EntertainmentData[1].published_date,
    },
    {
      title: EntertainmentData[2].title,
      abstract: EntertainmentData[2].abstract,
      image: EntertainmentData[2].multimedia[1].url,
      width: EntertainmentData[2].multimedia[1].width,
      height: EntertainmentData[2].multimedia[1].height,
      caption: EntertainmentData[2].multimedia[1].caption,
      url: EntertainmentData[2].url,
      date: EntertainmentData[2].published_date,
    },
  ];

  console.log(globalData);
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
        <div className={classes.rightSection}>
          <div className={classes.EntertainmentSection}>
            <div className={classes.section1}>
              <ImageCaption
                featuredImg={featEntertainment[0].image}
                caption={featEntertainment[0].caption}
                width={featEntertainment[0].width}
                height={featEntertainment[0].height}
              />
              <h3>{featEntertainment[0].title}</h3>
              <p>{featEntertainment[0].abstract}</p>
            </div>
            <div className={classes.section2}>no</div>
            <div className={classes.section3}>bye</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
