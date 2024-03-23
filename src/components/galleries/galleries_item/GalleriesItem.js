import classes from "./GalleriesItem.module.css";
import React from "react";

function GalleriesItem({ item, width }) {
  return (
    <div className={classes["carousel-item"]} style={{ width: width }}>
      <div></div>
      <img className={classes["carousel-img"]} src={item.imageUrl} />
      <div className={classes["carousel-item-text"]}>{item.desctiption}</div>
    </div>
  );
}

export default GalleriesItem;
