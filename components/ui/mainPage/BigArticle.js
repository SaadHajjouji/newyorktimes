import React from "react";
import ImageCaption from "../ImageCaption";
import classes from "./BigArticle.module.scss";
const BigArticle = ({ mainFeatured, SecondaryFeatured, children }) => {
  if (mainFeatured.title === undefined) {
    return "";
  } else
    return (
      <>
        <article className={classes.bigArticle}>
          <div className={classes.trendingTopic}>
            <div>
              <div className={classes.mainHeadline}>
                <h3>{mainFeatured.title}</h3>
                <p>{mainFeatured.abstract}</p>
              </div>
              {SecondaryFeatured !== "" ? (
                <div className={classes.secondHeadline}>
                  <h4>{SecondaryFeatured.title}</h4>
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              <ImageCaption
                featuredImg={mainFeatured.multimedia[0].url}
                caption={mainFeatured.multimedia[0].caption}
                alt={mainFeatured.multimedia[0].caption}
                width={mainFeatured.multimedia[0].width}
                height={mainFeatured.multimedia[0].height}
              />
            </div>
          </div>
          {children}
        </article>
      </>
    );
};

export default BigArticle;
