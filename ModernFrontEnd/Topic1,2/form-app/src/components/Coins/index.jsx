import React, { useState } from "react";

const image1Url =
  "https://i.ucoin.net/coin/43/590/43590497-1/azerbaijan-50-qapik-2006.jpg";
const image2Url =
  "https://i.ucoin.net/coin/50/270/50270507-2/azerbaijan-50-qapik-2006.jpg";

function Coins() {
  const [coin, setCoin] = useState(false); //? true

  const [point1, setPoint1] = useState(0);
  const [point2, setPoint2] = useState(0);

  function handleCoin() {
    const newCoin = !coin;

    if (newCoin) {
      //? ....
      setPoint1((prev) => prev + 1);
    } else {
      //? ....
      setPoint2((prev) => prev + 1);
    }

    setCoin(newCoin);

    // setCoin((prevCoin)=>!prevCoin)
  }

  const generalImg = coin == true ? image1Url : image2Url;

  // let generalImg = image1Url;

  // if (coin == false) {
  //   generalImg = image2Url;
  // }

  // const generalImg = coin == true ? image1Url : image2Url;

  console.log("coin", coin);
  console.log("generalImg", generalImg);

  return (
    <div>
      <ul>
        <li>Xerite uzu :{point1} </li>
        <li>Diger uzu :{point2} </li>
      </ul>
      <img src={generalImg} width={200} />
      <button onClick={handleCoin}>Cevir</button>
    </div>
  );
}

export default Coins;

// const a = true;

// const qepiyinEsasUzu = false

// const image1 = "https://dadasd/p.png"
// const image2 = "https://dadasd/g.png"

// const generalImg = qepiyinEsasUzu ? image1 : image2

// console.log(generalImg);

// <img src={generalImg} />

// const b = function () {
//   console.log("b....");
// };

// const c = function () {
//   console.log("c....");
// };

// const d = a == true ? b : c;

// console.log(d); // f

// d() // b....
