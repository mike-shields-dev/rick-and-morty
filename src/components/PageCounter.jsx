import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/PageCounter.module.css";

const PageCounter = ({ page, setPage }) => {
  const handleClick = (e) => setPage((prev) => prev + Number(e.target.value));

  return (
    <div className={styles["page-counter"]}>
      <button
        className={`${styles["page-counter__button"]} ${styles["page-counter__button--dec"]} `}
        onClick={handleClick}
        type="button"
        value={-1}
        disabled={page === 1}
      >
        -
      </button>
      <button
        className={`${styles["page-counter__button"]} ${styles["page-counter__button--inc"]}`}
        onClick={handleClick}
        type="button"
        value={1}
      >
        +
      </button>
      <input
        className={styles["page-counter__input"]}
        onChange={(e) => setPage(e.target.value)}
        type="number"
        id="page"
        value={page}
      />
    </div>
  );
};

PageCounter.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default PageCounter;
