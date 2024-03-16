export function comparePlayers(...players) {
  const cardValues = { JACK: 11, QUEEN: 12, KING: 13, ACE: 14 };

  const highestValues = players.map((player) => {
    return Math.max(
      ...player.map((card) => {
        return cardValues[card.value] || parseInt(card.value);
      })
    );
  });

  const maxIndex = highestValues.indexOf(Math.max(...highestValues));
  const maxPlayer = maxIndex + 1;

  return `Player ${maxPlayer}`;
}
