import styles from "./card.module.css";

import React, { useState } from "react";

export const JokesCard = ({
  text,
  emoji = "🤣",
  vote = 0,
  onDecrement,
  onIncrement,
}) => {
  // const [count, setCount] = useState(0);

  return (
    <div className={styles.card}>
      <div className={styles.vote}>
        <button onClick={onDecrement}>-</button>
        {/* <span>{count}</span> */}
        <span>{vote}</span>
        <button onClick={onIncrement}>+</button>
      </div>

      <div>
        <p>{text}</p>
      </div>

      <div className={styles.emoji}>{emoji}</div>
    </div>
  );
};
