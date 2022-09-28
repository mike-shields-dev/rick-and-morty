import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Controls.module.css";
import PageCounter from "./PageCounter";
import StatusFilter from "./StatusFilter";

const Controls = ({ status, setStatus, page, setPage }) => {
  return (
    <div className={styles.controls}>
      <div className={`${styles.controls__panel} left`}>
        <StatusFilter {...{ status, setStatus }} />
      </div>
      <div className={`${styles.controls__panel} right`}>
        <PageCounter {...{ page, setPage }} />
      </div>
    </div>
  );
};

Controls.propTypes = {
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Controls;
