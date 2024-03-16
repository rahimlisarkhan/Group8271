import React from "react";

import styles from "./player.module.css";

const cardBack = "https://deckofcardsapi.com/static/img/back.png";

function Player({ name, cards }) {
  return (
    <div className={styles.content}>
      <h4>{name}</h4>
      <div className={styles.cards}>
        {!cards?.length && (
          <>
            <img
              width={100}
              src={cardBack}
              style={{ transform: "rotate(45deg)" }}
            />
            <img
              width={100}
              src={cardBack}
              style={{ transform: "rotate(15deg)" }}
            />
          </>
        )}

        {cards?.map((card, index) => {
          const value = Math.floor(Math.random() * 45);

          return (
            <img
              key={"card-image-" + index}
              width={100}
              src={card.image}
              style={{ transform: `rotate(${value}deg)` }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Player;
