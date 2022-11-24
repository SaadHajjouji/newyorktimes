import React, { useEffect, useState } from "react";
import getTitles from "../../../helpers/dataCenter";
import Link from "next/link";
export const FooterContent = ({ setShowMobileNavigation }) => {
  const [sections, setSections] = useState("");
  useEffect(() => {
    getTitles()
      .then((data) => {
        setSections(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (sections == "") {
    return "";
  } else
    return (
      <>
        {sections?.map((el) => (
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
