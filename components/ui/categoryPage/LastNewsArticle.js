import React from "react";
import classes from "./LastNewsArticle.module.scss";
import ImageCaption from "../ImageCaption";
const LastNewsArticle = ({ articleData }) => {
  return (
    <article className={classes.lastNewsArticle}>
      <div className={classes.lastNewsMedia}>
        <span className={classes.author}>
          {articleData.byline.split(",")[0]}
        </span>
        <ImageCaption
          featuredImg={articleData.multimedia[0].url}
          caption={articleData.multimedia[0].caption}
          alt={articleData.multimedia[0].caption}
          height={articleData.multimedia[0].height}
          width={articleData.multimedia[0].width}
        />
      </div>
      <h3>{articleData.title}</h3>
    </article>
  );
};

export default LastNewsArticle;
