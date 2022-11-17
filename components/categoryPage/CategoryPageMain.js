import classes from "./CategoryPageMain.module.scss";

const CategoryPageMain = () => {
  return (
    <>
      <main className={classes.main}>
        <h1 className={classes.headingPrimary}>POLITICS</h1>
        <section className={classes.mainNewsSection}>
          <div className={classes.newsText}>
            <span>The editorial board</span>
            <h2>America Deserves Better Than Donald Trump</h2>
            <p>
              Mr. Trump’s return to the campaign trail poses new dangers to
              American democracy.
            </p>
            <span className={classes.author}>
              1d ago By THE EDITORIAL BOARD
            </span>
          </div>
          <div className={classes.mainNewsMedia}>
            <div className={classes.image}></div>
            <span>this is a caption</span>
          </div>
        </section>
        <section className={classes.moreNewsSection}>
          <article className={classes.moreNewsArticle}>
            <div className={classes.moreNewsMedia}>
              <div className={classes.moreNewsPhoto}></div>
              <span>this is a caption</span>
            </div>
            <div className={classes.newsText}>
              <span>The editorial board</span>
              <h2>America Deserves Better Than Donald Trump</h2>
              <p>
                Mr. Trump’s return to the campaign trail poses new dangers to
                American democracy.
              </p>
              <span className={classes.author}>
                1d ago By THE EDITORIAL BOARD
              </span>
            </div>
          </article>
          <article className={classes.moreNewsArticle}>
            <div className={classes.moreNewsMedia}>
              <div className={classes.moreNewsPhoto}></div>
              <span>this is a caption</span>
            </div>
            <div className={classes.newsText}>
              <span>The editorial board</span>
              <h2>America Deserves Better Than Donald Trump</h2>
              <p>
                Mr. Trump’s return to the campaign trail poses new dangers to
                American democracy.
              </p>
              <span className={classes.author}>
                1d ago By THE EDITORIAL BOARD
              </span>
            </div>
          </article>
          <article className={classes.moreNewsArticle}>
            <div className={classes.moreNewsMedia}>
              <div className={classes.moreNewsPhoto}></div>
              <span>this is a caption</span>
            </div>
            <div className={classes.newsText}>
              <span>The editorial board</span>
              <h2>America Deserves Better Than Donald Trump</h2>
              <p>
                Mr. Trump’s return to the campaign trail poses new dangers to
                American democracy.
              </p>
              <span className={classes.author}>
                1d ago By THE EDITORIAL BOARD
              </span>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default CategoryPageMain;
