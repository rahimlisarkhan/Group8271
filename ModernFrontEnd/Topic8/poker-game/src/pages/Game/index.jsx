import React from "react";
import { useRef } from "react";
import { useState } from "react";
import Player from "../../shared/components/Player";
import { getCard, getShuffleCards } from "../../services";
import { useEffect } from "react";
import { comparePlayers } from "../../shared/utils/comparePlayers";

function Game() {
  const [players, setPlayers] = useState([]);
  const [initialPlayers, setInitialPlayer] = useState([]);
  const [loading, setLoading] = useState(false);

  const [winPlayerName, setWinPlayerName] = useState();

  const [id, setId] = useState();

  const inputRef = useRef();

  useEffect(() => {
    (async () => {
      const { deck_id } = await getShuffleCards();
      setId(deck_id);
    })();
  }, []);

  const handleStart = () => {
    const playerCount = +inputRef.current.value;
    let i = 1;

    const newPlayers = [];

    while (i <= playerCount) {
      newPlayers.push({ name: "Player " + i, cards: [] });
      i++;
    }

    setPlayers(newPlayers);
    setInitialPlayer(newPlayers);

    inputRef.current.value = "";
  };

  const handleDeal = async () => {
    setLoading(true);

    const res = await getCard(id, { count: initialPlayers.length * 2 });

    const cards = [...res.data.cards];

    const newPlayers = [...initialPlayers];

    for (let playerIndex in newPlayers) {
      for (let card of cards) {
        const player = newPlayers[playerIndex];

        if (player.cards.length !== 2) {
          newPlayers[playerIndex] = {
            ...player,
            cards: [...player.cards, card],
          };
        }
      }
      cards.splice(0, 2);
    }

    const playersCards = newPlayers.map((player) => player.cards);

    const resultComporePlayerName = comparePlayers(...playersCards);

    setWinPlayerName(resultComporePlayerName);
    setPlayers(newPlayers);
    setLoading(false);
  };

  return (
    <div>
      <h2>Poker Game</h2>
      {!players.length ? (
        <>
          <input
            type="number"
            className="input"
            placeholder="Player count"
            ref={inputRef}
          />
          <button onClick={handleStart}>Start</button>
        </>
      ) : (
        <div>
          <button onClick={handleDeal}>Deal the cards</button>
          {loading && <h2>Compare...</h2>}
          <h2> {!winPlayerName ? "" : winPlayerName + " WIN !!!"} </h2>
          <div className="player-list">
            {players?.map((player, index) => (
              <Player key={"player-i-" + index} {...player} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
