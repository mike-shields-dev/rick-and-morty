import React from "react";
import styles from "../styles/app.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.app__header}>
        <h1 className={styles.app__heading}>Rick and Morty</h1>
        <p className={styles.app__tagline}>
          {`"I'm a scientist because I invent, transform, create, and destroy for
          a living, and when I don't like something about the world, I change
          it."`}
        </p>
      </header>
      <main className={styles.app__main}>Test</main>
    </div>
  );
};

export default App;
