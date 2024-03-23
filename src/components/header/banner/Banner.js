import React from "react";
import classes from "./Banner.module.css";
import ButtonViolet from "../../ui/button/ButtonViolet";

function Banner() {
  return (
    <section className={classes.banner}>
      <div className={classes.banner_content}>
        <h1 className={classes.banner_title}>Save your data storage here.</h1>
        <p className={classes.banner_desc}>
          Data Warehouse is a data storage area that has been tested for
          security, so you can store your data here safely but not be afraid of
          being stolen by others.
        </p>
        <ButtonViolet text="Learn More" />
      </div>
      <img src="/banner.png" alt="banner-img" className={classes.banner_img} />
    </section>
  );
}

export default Banner;
