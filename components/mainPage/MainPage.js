import React, { useEffect, useState } from "react";
import ImageCaption from "../ui/ImageCaption";
import BigArticle from "../ui/mainPage/BigArticle";
import classes from "./Main.module.scss";
const MainPage = ({ content }) => {
  const contents = content;
  const globalData = contents.results;
  const opinionData = globalData.filter((data) => data.section === "opinion");
  const EntertainmentData = globalData
    .filter(
      (data) =>
        data.section === "arts" ||
        data.section === "style" ||
        data.section === "sports" ||
        data.section === "science" ||
        data.section === "travel" ||
        data.section === "podcasts"
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
  //* *  data for the different sections
  // * * data for the world news featured section
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
  // * * data for the corner entertainment section
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
      title: EntertainmentData[2]?.title,
      abstract: EntertainmentData[2]?.abstract,
      image: EntertainmentData[2]?.multimedia[1].url,
      width: EntertainmentData[2]?.multimedia[1].width,
      height: EntertainmentData[2]?.multimedia[1].height,
      caption: EntertainmentData[2]?.multimedia[1].caption,
      url: EntertainmentData[2]?.url,
      date: EntertainmentData[2]?.published_date,
    },
  ];
  // * * data and state for the corner entertainment section. its a bit complicated because apparently a generated random int on the server will not be the same as the generated int on the client side. needed that int to get a random object from the usData variable
  const [randomObjectIndex, setRandomObject] = useState(2);
  useEffect(
    () => setRandomObject(Math.floor(Math.random() * (usData.length - 1) + 1)),
    []
  );
  const featuredUs = {
    title: usData[randomObjectIndex].title,
    abstract: usData[randomObjectIndex].abstract,
    image: usData[randomObjectIndex].multimedia[1].url,
    width: usData[randomObjectIndex].multimedia[1].width,
    height: usData[randomObjectIndex].multimedia[1].height,
    caption: usData[randomObjectIndex].multimedia[1].caption,
    url: usData[randomObjectIndex].url,
    date: usData[randomObjectIndex].published_date,
  };
  // * data for the opinion section in the bottom corner
  console.log(opinionData);
  return (
    <div className={classes.generalLayout}>
      <div className={classes.leftSection}>
        <BigArticle
          mainFeatured={featuredWorld}
          SecondaryFeatured={worldData[1]}
        >
          <div className={classes.electionsSection}>
            {elections.map((election) => (
              <h3 key={election.title}>{election.title}</h3>
            ))}
          </div>
        </BigArticle>
        <BigArticle mainFeatured={featuredUs} SecondaryFeatured={usData[0]} />
      </div>
      <div className={classes.rightSection}>
        <div className={classes.EntertainmentSection}>
          <article className={classes.section1}>
            <ImageCaption
              featuredImg={featEntertainment[0].image}
              caption={featEntertainment[0].caption}
              alt={featEntertainment[0].caption}
              width={featEntertainment[0].width}
              height={featEntertainment[0].height}
            />
            <h3>{featEntertainment[0].title}</h3>
            <p>{featEntertainment[0].abstract}</p>
          </article>
          <div className={classes.miniSectionWrapper}>
            <article className={classes.section2}>
              <ImageCaption
                featuredImg={featEntertainment[1].image}
                caption={""}
                alt={featEntertainment[1].caption}
                width={featEntertainment[1].width}
                height={featEntertainment[1].height}
              />
              <h3>{featEntertainment[1].title}</h3>
            </article>
            <article className={classes.section3}>
              <ImageCaption
                featuredImg={featEntertainment[2].image}
                caption={""}
                alt={featEntertainment[2].caption}
                width={featEntertainment[2].width}
                height={featEntertainment[2].height}
              />
              <h3>{featEntertainment[2].title}</h3>
            </article>
          </div>
        </div>
        <div className={classes.opinionSection}>
          <h4>Opinion</h4>
          {opinionData.map((op) => (
            <article key={op.title} className={classes.opinionArticle}>
              <div>
                <span className={classes.authorName}>{op.byline.slice(3)}</span>
                <h5 key={op.title}>{op.title}</h5>
              </div>
              <ImageCaption
                featuredImg={op.multimedia[2].url}
                caption={op.multimedia[2].caption}
                alt={op.multimedia[2].caption}
                width={op.multimedia[2].width}
                height={op.multimedia[2].height}
              />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
