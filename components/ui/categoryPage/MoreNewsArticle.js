import React from "react";
import ImageCaption from "../ImageCaption";
import classes from "./MoreNewsArticle.module.scss";
const MoreNewsArticle = ({ articleData }) => {
  return (
    <article className={classes.moreNewsArticle}>
      <div className={classes.moreNewsMedia}>
        <ImageCaption
          featuredImg={articleData.multimedia[1].url}
          caption={articleData.multimedia[1].caption}
          alt={articleData.multimedia[1].caption}
          height={articleData.multimedia[1].height}
          width={articleData.multimedia[1].width}
        />
      </div>
      <div className={classes.newsText}>
        <span>{articleData.byline.split(",")[0]}</span>
        <h2>{articleData.title}</h2>
        <p>{articleData.abstract}</p>
        <span className={classes.author}>1d ago {articleData.byline}</span>
      </div>
    </article>
  );
};

export default MoreNewsArticle;
