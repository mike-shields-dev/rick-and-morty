import React, { useEffect, useState } from "react";
import styles from "../styles/app.module.css";
import CharacterCard from "./CharacterCard";
import Controls from "./Controls";
import PageCounter from "./PageCounter";

const App = () => {
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const updateCharacters = async () => {
      try {
        const url = `https://rickandmortyapi.com/api/character/?page=${page}${
          filter === "all" ? "" : `&status=${filter}`
        }`;
        const res = await fetch(url);
        const data = await res.json();
        setCharacters(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    updateCharacters();
  }, [filter, page]);

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
      <main className={styles.app__main}>
        <Controls {...{ filter, setFilter, page, setPage }} />

        <div className={styles["app__character-cards"]}>
          {characters.map(({ id, name, species, status, image }) => (
            <CharacterCard key={id} {...{ name, species, status, image }} />
          ))}
        </div>
      </main>

      <footer className={styles.app__footer}>
        <PageCounter {...{ page, setPage }} />
      </footer>
    </div>
  );
};

export default App;
