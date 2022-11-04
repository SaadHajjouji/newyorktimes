import React, { useEffect, useState } from "react";
import getTitles from "../../../../helpers/dataCenter";
export const FooterContent = ({}) => {
  const [data, setData] = useState();
  useEffect(() => {
    getTitles().then((data) => {
      setData(data);
    });
  }, []);
  console.log(data);
  // if (data)
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
