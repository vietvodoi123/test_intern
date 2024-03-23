import React, { useEffect, useState } from "react";
import useHttps from "../../hooks/useHttps";
import Logo from "../ui/logo/Logo";
import classes from "./Galleries.module.css";
import GalleriesItem from "./galleries_item/GalleriesItem";

function Galleries() {
  const { loading, error, fetchData } = useHttps();
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    console.log(currentSlide);
  }, [currentSlide]);

  const goToPrevSlide = () => {
    const index = (currentSlide - 1 + data.length) % data.length;
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    const index = (currentSlide + 1) % data.length;
    setCurrentSlide(index);
  };
  useEffect(() => {
    const fetchDataAndTransform = async () => {
      const req = {
        url: "/galleries",
      };

      await fetchData(req, setData);
    };

    fetchDataAndTransform();

    return () => {};
  }, [fetchData]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= data.length) {
      newIndex = data.length - 1;
    }

    setCurrentSlide(newIndex);
  };
  return (
    <section className={classes.galleries}>
      <h3 className={classes.title}>Testimonials</h3>

      <div className={classes.carousel}>
        <div
          className={classes.inner}
          style={{ transform: `translate(-${currentSlide * 100}%)` }}
        >
          {loading && (
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "300px",
              }}
            >
              <span>
                <Logo loading={true} />
              </span>
            </div>
          )}
          {!loading &&
            data &&
            data.map((item) => {
              return <GalleriesItem item={item} width={"100%"} />;
            })}
        </div>

        <div className={classes["carousel-buttons"]}>
          <button
            className={classes["button-arrow"] + " " + classes.left}
            onClick={() => {
              updateIndex(currentSlide - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className={"bi bi-arrow-left " + classes.icon}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </button>
          <div className={classes["indicators"]}>
            {!loading &&
              data &&
              data.map((item, index) => {
                return (
                  <div className={classes["radio-group"]}>
                    <input
                      checked={currentSlide === index}
                      type="radio"
                      className={classes["radio-input"]}
                      alt={index}
                      key={index}
                      // onChange={() => updateIndex(index)}
                    />
                    <span
                      className={classes["radio-background"]}
                      onClick={() => updateIndex(index)}
                    >
                      <span className={classes["radio-inner"]}></span>
                    </span>
                  </div>
                );
              })}
          </div>
          <button
            className={classes["button-arrow"] + " " + classes.right}
            onClick={() => {
              updateIndex(currentSlide + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className={"bi bi-arrow-right " + classes.icon}
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
    </section>
  );
}

export default Galleries;
