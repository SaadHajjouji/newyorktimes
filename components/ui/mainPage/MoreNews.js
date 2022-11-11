import React from "react";
import ImageCaption from "../ImageCaption";
import classes from "./MoreNews.module.scss";
const MoreNews = ({ news }) => {
  return (
    <div>
      <article className={classes.moreNewsArticle} key={news.title}>
        <ImageCaption
          featuredImg={news?.multimedia[1].url}
          caption={news?.multimedia[1].caption}
          alt={news?.multimedia[1].caption}
          width={news?.multimedia[1].width}
          height={news?.multimedia[1].height}
        />
        <h3>{news?.title}</h3>
      </article>
    </div>
  );
};

export default MoreNews;
