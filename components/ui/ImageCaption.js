import React from "react";
import Image from "next/image";
import classes from "./ImageCaption.module.scss";
const ImageCaption = ({ featuredImg, caption, width, height }) => {
  return (
    <div>
      <Image
        src={featuredImg}
        alt={caption}
        loader={() => featuredImg}
        width={width}
        height={height}
      />
      <span className={classes.caption}>{caption}</span>
    </div>
  );
};

export default ImageCaption;
