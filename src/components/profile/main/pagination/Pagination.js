import classes from "./Pagination.module.css";
import React from "react";

function Pagination({ total_page, current_page, setPage }) {
  let arr = [];
  for (let i = 1; i <= total_page; i++) {
    arr.push(i);
  }
  const prevBtn = () => {
    if (current_page !== 0) {
      setPage(current_page - 1);
    }
  };

  const nextBtn = () => {
    if (current_page !== total_page) {
      setPage(current_page + 1);
    }
  };
  return (
    <div className={classes.pagination}>
      <button onClick={() => prevBtn()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
      </button>
      {arr.map((item, i) => (
        <button
          onClick={() => setPage(item)}
          style={{
            backgroundColor: `${
              current_page === item ? "var(--violet)" : "var(--gray)"
            }`,
            color: `${current_page === item ? "white" : "var(--text-gray)"}`,
          }}
          key={i}
        >
          {item}
        </button>
      ))}
      <button onClick={() => nextBtn()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
