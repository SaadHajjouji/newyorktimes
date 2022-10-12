import React from "react";

const MobileFooter = () => {
  const FooterContent = [
    { title: "News", sections: ["Home Page", "World", "CoronaVirus"] },
    { title: "Arts", sections: ["Today's Arts", "Art & Design", "Books"] },
    { title: "Living", sections: ["Automotive", "Games", "Education"] },
  ];
  return (
    <>
      {FooterContent.map((content) => (
        <div key={content.title}>
          <h3>{content.title}</h3>
          <ul>
            {content.sections.map((section) => (
              <li key={section[0]}>{section}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default MobileFooter;
