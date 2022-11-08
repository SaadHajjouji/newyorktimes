import React, { useEffect, useState } from "react";
import ImageCaption from "../ui/ImageCaption";
import BigArticle from "../ui/mainPage/BigArticle";
import classes from "./Main.module.scss";
const MainPage = ({ content }) => {
  const contents = content;
  const globalData = contents.results;
  const opinionData = globalData.filter((el) => el.section === "opinion");
  const EntertainmentData = globalData
    .filter(
      (el) =>
        el.section === "arts" ||
        el.section === "style" ||
        el.section === "sports" ||
        el.section === "travel" ||
        el.section === "podcasts" ||
        el.section === "upshot" ||
        el.section === "dining"
    )
    .filter((el, i) => i < 3);
  const worldDataSection = globalData.filter((el) => el.section === "world")[0];
  const worldData = globalData.filter(
    (el) => el.section === "world" && el.multimedia
  );

  const usData = globalData.filter(
    (el) => el.section === "us" && el.multimedia
  );
  const climateData = globalData
    .filter(
      (el) =>
        el.section === "briefing" ||
        el.section === "climate" ||
        el.section === "t-magazine" ||
        (el.subsection === "climate" && el.multimedia)
    )
    .filter((_, i) => i < 1);

  const elections = globalData
    .filter(
      (el) =>
        el.subsection === "elections" ||
        (el.subsection === "politics" && el.multimedia)
    )
    .filter((el, i) => i <= 1);
  const wellnessData = globalData.filter(
    (el) =>
      el.section === "well" ||
      el.section === "parenting" ||
      (el.section === "food" && el.multimedia)
  );
  const moreNewsData = globalData
    .filter(
      (el) =>
        el.section === "business" ||
        el.section === "technology" ||
        el.section === "nyregion" ||
        (el.subsection === "middleeast" && el.multimedia)
    )
    .filter((el, i) => i < 4);
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
      title: EntertainmentData[0]?.title,
      abstract: EntertainmentData[0]?.abstract,
      image: EntertainmentData[0]?.multimedia[1].url,
      width: EntertainmentData[0]?.multimedia[1].width,
      height: EntertainmentData[0]?.multimedia[1].height,
      caption: EntertainmentData[0]?.multimedia[1].caption,
      url: EntertainmentData[0]?.url,
      date: EntertainmentData[0]?.published_date,
    },
    {
      title: EntertainmentData[1]?.title,
      abstract: EntertainmentData[1]?.abstract,
      image: EntertainmentData[1]?.multimedia[1].url,
      width: EntertainmentData[1]?.multimedia[1].width,
      height: EntertainmentData[1]?.multimedia[1].height,
      caption: EntertainmentData[1]?.multimedia[1].caption,
      url: EntertainmentData[1]?.url,
      date: EntertainmentData[1]?.published_date,
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
    title: usData[randomObjectIndex]?.title,
    abstract: usData[randomObjectIndex]?.abstract,
    image: usData[randomObjectIndex]?.multimedia[0]?.url,
    width: usData[randomObjectIndex]?.multimedia[0]?.width,
    height: usData[randomObjectIndex]?.multimedia[0]?.height,
    caption: usData[randomObjectIndex]?.multimedia[0]?.caption,
    url: usData[randomObjectIndex]?.url,
    date: usData[randomObjectIndex]?.published_date,
  };
  // * data for the climate section
  const climateSection = {
    title: climateData[0]?.title,
    abstract: climateData[0]?.abstract,
    image: climateData[0]?.multimedia[1]?.url,
    width: climateData[0]?.multimedia[1]?.width,
    height: climateData[0]?.multimedia[1]?.height,
    caption: climateData[0]?.multimedia[1]?.caption,
    url: climateData[0]?.url,
    date: climateData[0]?.published_date,
  };
  const wellnessSection = [
    {
      title: wellnessData[0].title,
      abstract: wellnessData[0].abstract,
      image: wellnessData[0].multimedia[1].url,
      width: wellnessData[0].multimedia[1].width,
      height: wellnessData[0].multimedia[1].height,
      caption: wellnessData[0].multimedia[1].caption,
      url: wellnessData[0].url,
      date: wellnessData[0].published_date,
    },
    {
      title: wellnessData[wellnessData.length - 1].title,
      abstract: wellnessData[wellnessData.length - 1].abstract,
      image: wellnessData[wellnessData.length - 1].multimedia[1].url,
      width: wellnessData[wellnessData.length - 1].multimedia[1].width,
      height: wellnessData[wellnessData.length - 1].multimedia[1].height,
      caption: wellnessData[wellnessData.length - 1].multimedia[1].caption,
      url: wellnessData[wellnessData.length - 1].url,
      date: wellnessData[wellnessData.length - 1].published_date,
    },
  ];
  console.log(globalData);
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
        <BigArticle
          mainFeatured={featuredUs}
          SecondaryFeatured={usData[usData.length - 1]}
        />

        <BigArticle mainFeatured={climateSection} SecondaryFeatured={""} />
        <BigArticle
          mainFeatured={wellnessSection[0]}
          SecondaryFeatured={wellnessSection[wellnessSection.length - 1]}
        />
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
            <div className={classes.section1Titles}>
              <h3>{featEntertainment[0].title}</h3>
              <p>{featEntertainment[0].abstract}</p>
            </div>
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
          <h4 className={classes.sectionHeader}>Opinion</h4>
          <div className={classes.opinionSectionWrapper}>
            {opinionData.map((op, i) => (
              <article key={op.title} className={classes.opinionArticle}>
                <div className={classes.opinionContent}>
                  <span className={classes.authorName}>
                    {op.byline.slice(3)}
                  </span>
                  <h5 key={op.title}>{op.title}</h5>
                </div>
                {i % 2 === 0 ? (
                  <ImageCaption
                    featuredImg={op.multimedia[1].url}
                    caption={op.multimedia[1].caption}
                    alt={op.multimedia[1].caption}
                    width={op.multimedia[1].width}
                    height={op.multimedia[1].height}
                  />
                ) : (
                  ""
                )}
              </article>
            ))}
          </div>
        </div>
        <div className={classes.moreNewsSection}>
          <h4 className={classes.sectionHeader}>more news</h4>
          <div className={classes.moreNewsWrapper}>
            <div className={classes.moreNewsWrapper1}>
              {moreNewsData
                .filter((_, i) => i < 2)
                .map((el) => (
                  <article className={classes.moreNewsArticle} key={el.title}>
                    <ImageCaption
                      featuredImg={el.multimedia[1].url}
                      caption={""}
                      alt={el.multimedia[1].caption}
                      width={el.multimedia[1].width}
                      height={el.multimedia[1].height}
                    />
                    <h3>{el.title}</h3>
                  </article>
                ))}
            </div>
            <div className={classes.moreNewsWrapper2}>
              {moreNewsData
                .filter((_, i) => i >= 2)
                .map((el) => (
                  <article className={classes.moreNewsArticle} key={el.title}>
                    <ImageCaption
                      featuredImg={el.multimedia[1].url}
                      caption={""}
                      alt={el.multimedia[1].caption}
                      width={el.multimedia[1].width}
                      height={el.multimedia[1].height}
                    />
                    <h3>{el.title}</h3>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
