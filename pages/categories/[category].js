import React from "react";
import getTitles from "../../helpers/dataCenter";
const category = (props) => {
  return <div>{props.category}</div>;
};

export default category;

export async function getStaticProps(context) {
  const category = context.params.category;
  return {
    props: {
      category: category,
    },
  };
}
export async function getStaticPaths() {
  const sections = await getTitles();
  const paths = sections.map((section) => ({ params: { category: section } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}
