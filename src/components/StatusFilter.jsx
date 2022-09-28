import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/StatusFilter.module.css";

const inputValues = ["alive", "dead", "all"];

const StatusFilter = ({ setStatus, status }) => {
  return (
    <fieldset className={styles["status-filter"]}>
      <legend>Status: {status}</legend>

      <div className={styles["status-filter__inputs"]}>
        {inputValues.map((value) => (
          <label
            key={value}
            className={styles["status-filter__label"]}
            htmlFor={value}
          >
            {value}
            <input
              defaultChecked={status === value}
              className={styles["status-filter__input"]}
              id={value}
              onChange={(e) => setStatus(e.target.value)}
              name="status"
              type="radio"
              value={value}
            />
          </label>
        ))}
      </div>
    </fieldset>
  );
};

StatusFilter.propTypes = {
  setStatus: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default StatusFilter;
