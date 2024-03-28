import React from "react";
import styles from "./title.module.css";
import { Button } from "../Button";

function TitleContent() {
  return (
    <div className={styles.content}>
      <h1>Pokedex</h1>
      <Button color="success" size="lg">
        Play Game
      </Button>
    </div>
  );
}

export default TitleContent;
