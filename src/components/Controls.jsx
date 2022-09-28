import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Controls.module.css";
import PageCounter from "./PageCounter";
import StatusFilter from "./StatusFilter";

const Controls = ({ filter, setFilter, page, setPage }) => {
  return (
    <div className={styles.controls}>
      <div className={`${styles.controls__panel} left`}>
        <StatusFilter {...{ filter, setFilter }} />
      </div>
      <div className={`${styles.controls__panel} right`}>
        <label htmlFor="page" style={{ textAlign: "left" }}>
          Page
        </label>
        <PageCounter {...{ page, setPage }} />
      </div>
    </div>
  );
};

Controls.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Controls;
