import LastNewsArticle from "../ui/categoryPage/LastNewsArticle";
import MoreNewsArticle from "../ui/categoryPage/MoreNewsArticle";
import ImageCaption from "../ui/ImageCaption";
import classes from "./CategoryPageMain.module.scss";

const CategoryPageMain = ({ category, categoryData }) => {
  const globalData = categoryData
    ? categoryData.filter((el) => el.multimedia).filter((el) => el.title !== "")
    : [];
  if (globalData.length !== 0)
    return (
      <>
        <main className={classes.main}>
          <h1 className={classes.headingPrimary}>{category}</h1>
          <section className={classes.mainNewsSection}>
            <div className={classes.newsText}>
              <span>{globalData[0].byline.split(",")[0]}</span>
              <h2>{globalData[0].title}</h2>
              <p>{globalData[0].abstract}</p>
              <span className={classes.author}>
                1d ago {globalData[0].byline}
              </span>
            </div>
            <div className={classes.mainNewsMedia}>
              <ImageCaption
                featuredImg={globalData[0].multimedia[0].url}
                caption={globalData[0].multimedia[0].caption}
                alt={globalData[0].multimedia[0].caption}
                height={globalData[0].multimedia[0].height}
                width={globalData[0].multimedia[0].width}
              />
            </div>
          </section>
          <section className={classes.moreNewsSection}>
            <MoreNewsArticle articleData={globalData[1]} />
            <MoreNewsArticle articleData={globalData[2]} />
            <MoreNewsArticle articleData={globalData[3]} />
          </section>
          <section className={classes.lastNewsSection}>
            <LastNewsArticle articleData={globalData[4]} />
            <LastNewsArticle articleData={globalData[5]} />
            <LastNewsArticle articleData={globalData[6]} />
            <LastNewsArticle articleData={globalData[7]} />
            <LastNewsArticle articleData={globalData[8]} />
          </section>
        </main>
      </>
    );
  else {
    return "loading";
  }
};

export default CategoryPageMain;
