import { useEffect, useState } from "react";
import Card from "./card";

export default function Board() {
  // loading is true until we are done fetching all images
  let [loading, setLoading] = useState(true);
  // I am using an immediately invoked function because I could not simply
  // use Array.fill to make 10 cards since I needed a way to assign unique
  // keys to each card
  let [cards, setCards] = useState(
    (() => {
      let data = [];
      for (let i = 0; i < 10; i++) {
        data[i] = (
          <Card key={i} placeHoldImg={"../../public/img/question.png"} />
        );
      }
      return data;
    })()
  );

  return (
    <>
      {loading ? <h2>Loading images</h2> : null}
      <div className="card-container">
        {cards.map((card) => {
          return card;
        })}
      </div>
    </>
  );
}
