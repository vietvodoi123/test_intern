import React from "react";
import classes from "./Features.module.css";
import FeaturesItem from "./features_item/FeaturesItem";
const FEATURES_DATA = [
  {
    title: "Search Data",
    desc: "Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.",

    bg_color: "rgba(104, 201, 186,0.1)",
  },
  {
    title: "24 Hours Access",
    desc: "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",

    bg_color: "rgba(156, 105, 226,0.1)",
  },
  {
    title: "Print Out",
    desc: "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",

    bg_color: "rgba(240, 99, 184,0.1)",
  },
  {
    title: "Security Code",
    desc: "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",

    bg_color: "rgba(45, 156, 219,0.1)",
  },
];
function Features() {
  return (
    <section className={classes.features}>
      <div className={classes.features_header}>
        <h3 className={classes.features_title}>Features</h3>
        <p className={classes.features_desc}>
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>
      </div>
      <div className={classes.features_content}>
        {FEATURES_DATA.map((item, i) => (
          <FeaturesItem item={item} key={i} index={i + 1} />
        ))}
      </div>
    </section>
  );
}

export default Features;
