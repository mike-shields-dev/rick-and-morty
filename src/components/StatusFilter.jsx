import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/StatusFilter.module.css";

const inputValues = ["alive", "dead", "all"];

const StatusFilter = ({ filter, setFilter }) => {
  return (
    <fieldset className={styles["status-filter"]}>
      <legend>Status: {filter}</legend>

      <div className={styles["status-filter__inputs"]}>
        {inputValues.map((value) => (
          <label
            key={value}
            className={
              value === filter
                ? styles["status-filter__label--active"]
                : styles["status-filter__label"]
            }
            htmlFor={value}
          >
            {value}
            <input
              defaultChecked={filter === value}
              className={styles["status-filter__input"]}
              id={value}
              onChange={(e) => setFilter(e.target.value)}
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
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default StatusFilter;
