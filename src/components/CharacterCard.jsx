import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/CharacterCard.module.css";

const CharacterCard = ({ name, species, status, image }) => {
  let statusColor = "currentColor";
  if (status.toLowerCase() === "dead") statusColor = "#f00";
  if (status.toLowerCase() === "alive") statusColor = "#0f0";

  return (
    <div className={styles["character-card"]}>
      <img className={styles["character-card__image"]} src={image} alt={name} />
      <div className={styles["character-card__stats"]}>
        <p className={styles["character-card__stat"]}>
          <span className={styles["character-card__label"]}>Name: </span>
          {name}
        </p>
        <p className={styles["character-card__stat"]}>
          <span className={styles["character-card__label"]}>Species: </span>
          {species}
        </p>
        <p className={styles["character-card__stat"]}>
          <span className={styles["character-card__label"]}>Status: </span>
          <span style={{ color: statusColor }}>{status}</span>
        </p>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterCard;
