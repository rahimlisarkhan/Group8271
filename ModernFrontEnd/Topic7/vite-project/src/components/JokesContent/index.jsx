import React, { useEffect, useState } from "react";
import styles from "./jcontent.module.css";
import { JokesCard } from "../Card";
import { getJokes } from "../../services";
// import JokesCard from "../Card";
// import { smiles } from "../../../constant/smiles";

const JokesContent = () => {
  const [data, setData] = useState();

  const [page, setPage] = useState(1);

  useEffect(() => {
    //? Mounting
    async function fetchData() {
      const res = await getJokes(page);

      const newData = res?.data?.results?.map((item) => {
        const newItem = {
          ...item,
          vote: 0,
        };

        return newItem;
      });

      setData(newData);
    }

    fetchData();

    //? Unmounting
    return () => {};
  }, [page]); //? Updating

  console.log("data", data);

  // const handleEmoji = (i) => {
  //   let emoji;

  //   if (i < 3) {
  //     emoji = smiles.smile1;
  //   }

  //   if (i < 6 && i >= 3) {
  //     emoji = smiles.smile3;
  //   }

  //   if (i < 8 && i >= 6) {
  //     emoji = smiles.smile2;
  //   }

  //   if (i == 8) {
  //     emoji = smiles.smile4;
  //   }

  //   if (i == 9) {
  //     emoji = smiles.smile5;
  //   }
  //   return emoji;
  // };

  const handleAzalt = (i) => {
    const newData = [...data];
    newData[i].vote -= 1;
    newData.sort(
      (novbetiBirinci, novbetiIkinici) =>
        novbetiIkinici.vote - novbetiBirinci.vote
    );

    setData(newData);
  };

  const handleArtir = (i) => {
    const newData = [...data];
    newData[i].vote += 1;

    newData.sort(
      (novbetiBirinci, novbetiIkinici) =>
        novbetiIkinici.vote - novbetiBirinci.vote
    );

    setData(newData);

    console.log("newData", newData);
  };

  return (
    <div className={styles.content}>
      <div className={styles.box}>
        <div className={styles.leftSide}>
          <p className={styles.leftTitle}> Jokes App</p>
          <img
            width={100}
            src="https://parspng.com/wp-content/uploads/2022/06/imojipng.parspng.com-4.png"
          />
          <div>
            <button
              onClick={() => setPage((prev) => (prev <= 1 ? 1 : prev - 1))}
            >
              Prev
            </button>
            <button onClick={() => setPage(1)}>1</button>
            <button onClick={() => setPage(2)}>2</button>
            <button onClick={() => setPage(3)}>3</button>
            <button
              disabled={!data?.length}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
            <h2>{page}</h2>
          </div>
        </div>
        <div className={styles.rightSide}>
          {!data?.length && <h1>Loading...</h1>}
          {data?.map((item, index) => {
            // const emoji = handleEmoji(index);

            return (
              <JokesCard
                vote={item?.vote}
                text={item.joke}
                // emoji={emoji}
                onDecrement={() => handleAzalt(index)}
                onIncrement={() => handleArtir(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JokesContent;

// const myOby = {
//   vote: 2,
// };

// let a = 5

// a = a + 10

// myOby.vote = myOby.vote + 100;

// console.log(myOby);
