import React, { useEffect, useState } from "react";
import ImageCaption from "../ui/ImageCaption";
import BigArticle from "../ui/mainPage/BigArticle";
import MoreNews from "../ui/mainPage/MoreNews";
import classes from "./Main.module.scss";
const MainPage = ({ content }) => {
  const contents = content;
  const globalData = contents.results
    .filter((el) => el.section !== "crosswords")
    .filter((el) => el.multimedia)
    .filter((el) => el.section !== "opinion");

  const opinionData = content.results.filter((el) => el.section === "opinion");

  return (
    <div className={classes.generalLayout}>
      <div className={classes.leftSection}>
        <BigArticle
          mainFeatured={globalData[0]}
          SecondaryFeatured={globalData[1]}
        >
          <div className={classes.electionsSection}>
            <h3>{globalData[2].title}</h3>
            <h3>{globalData[3].title}</h3>
          </div>
        </BigArticle>
        <BigArticle
          mainFeatured={globalData[4]}
          SecondaryFeatured={globalData[5]}
        />

        <BigArticle mainFeatured={globalData[6]} SecondaryFeatured={""} />
        <BigArticle
          mainFeatured={globalData[7]}
          SecondaryFeatured={globalData[8]}
        />
      </div>
      <div className={classes.rightSection}>
        <div className={classes.EntertainmentSection}>
          <article className={classes.section1}>
            <ImageCaption
              featuredImg={globalData[9].multimedia[1].url}
              caption={globalData[9].multimedia[1].caption}
              alt={globalData[9].multimedia[1].caption}
              width={globalData[9].multimedia[1].width}
              height={globalData[9].multimedia[1].height}
            />
            <div className={classes.section1Titles}>
              <h3>{globalData[10].title}</h3>
              <p>{globalData[10].abstract}</p>
            </div>
          </article>
          <div className={classes.miniSectionWrapper}>
            <article className={classes.section2}>
              <ImageCaption
                featuredImg={globalData[11].multimedia[1].url}
                caption={""}
                alt={globalData[11].multimedia[1].caption}
                width={globalData[11].multimedia[1].width}
                height={globalData[11].multimedia[1].height}
              />
              <h3>{globalData[11].title}</h3>
            </article>
            <article className={classes.section3}>
              <ImageCaption
                featuredImg={globalData[12].multimedia[1].url}
                caption={""}
                alt={globalData[12].multimedia[1].caption}
                width={globalData[12].multimedia[1].width}
                height={globalData[12].multimedia[1].height}
              />
              <h3>{globalData[12].title}</h3>
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
              <MoreNews news={globalData[13]} />
              <MoreNews news={globalData[14]} />
            </div>
            <div className={classes.moreNewsWrapper2}>
              <MoreNews news={globalData[15]} />
              <MoreNews news={globalData[16]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
