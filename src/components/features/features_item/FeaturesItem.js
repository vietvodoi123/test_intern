import classes from "./FeaturesItem.module.css";
import React from "react";

function FeaturesItem({ item, index }) {
  return (
    <div className={classes.features_item}>
      <div
        className={classes.skevy}
        style={{ backgroundColor: item.bg_color }}
      />
      <div
        className={classes.retangle}
        style={{ borderBottomColor: item.bg_color }}
      ></div>
      <img
        src={`/features${index}.png`}
        alt={item.title}
        className={classes.img}
      />
      <div className={classes.content}>
        <p className={classes.title}>{item.title}</p>
        <p className={classes.desc}>{item.desc}</p>
        <button className={classes.btn}>
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`bi bi-arrow-right ${classes.icon_right}`}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FeaturesItem;
