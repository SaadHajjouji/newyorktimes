import React from "react";
import Image from "next/image";
import classes from "./ImageCaption.module.scss";
const ImageCaption = ({ featuredImg, caption, width, height, alt }) => {
  return (
    <div>
      <Image
        src={featuredImg}
        alt={alt}
        loader={() => featuredImg}
        width={width}
        height={height}
        unoptimized={true}
      />
      <span className={classes.caption}>{caption}</span>
    </div>
  );
};

export default ImageCaption;
