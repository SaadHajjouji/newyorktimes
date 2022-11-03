import React, { useEffect, useState } from "react";
export const FooterContent = ({}) => {
  const [data, setData] = useState();
  useEffect(() => {
    const baseUrl =
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EhgvtA3WE0sRHZeL6sQ8LPFZtn2CtGFz";
    fetch(baseUrl)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (!res.status) {
          throw new Error("failed to get data");
        } else setData(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const GetUniqueTitles = () => {
    const sectionNames = data?.map((el) => el.section);
    let uniqueTitles = [];
    sectionNames?.forEach((el) => {
      if (!uniqueTitles.includes(el)) {
        uniqueTitles.push(el);
      }
    });
    return uniqueTitles;
  };
  console.log(GetUniqueTitles());
  if (data)
    return (
      <>
        <div>
          <h3>News</h3>
        </div>
        <div>
          <h3>Arts</h3>
        </div>
        <div>
          <h3>Living</h3>
        </div>
        <div>
          <h3>Living</h3>
        </div>
        <div>
          <h3>Living</h3>
        </div>{" "}
        <div>
          <h3>Living</h3>
        </div>
      </>
    );
};
