import React, { useEffect, useState } from "react";
import getTitles from "../../../../helpers/dataCenter";
import Link from "next/link";
export const FooterContent = ({}) => {
  const [data, setData] = useState();
  useEffect(() => {
    getTitles().then((data) => {
      setData(data);
    });
  }, []);
  console.log(data);
  if (data)
    return (
      <>
        {data.map((el) => (
          <div key={el}>
            <Link href={`/categories/${el}`}>
              <a>
                <h3>{el}</h3>
              </a>
            </Link>
          </div>
        ))}
      </>
    );
};
