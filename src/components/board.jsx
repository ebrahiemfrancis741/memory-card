import { useEffect, useState } from "react";
import Card from "./card";

export default function Board() {
  // loading is true until we are done fetching all images
  let [loading, setLoading] = useState(true);
  let [imageList, setImageList] = useState([]);
  // I am using an immediately invoked function because I could not simply
  // use Array.fill to make 10 cards since I needed a way to assign unique
  // keys to each card
  let [cards, setCards] = useState(
    (() => {
      let data = [];
      for (let i = 0; i < 20; i++) {
        data[i] = (
          <Card
            key={i}
            pokemonImg={null}
            placeHoldImg={"../../public/img/question.png"}
          />
        );
      }
      return data;
    })()
  );

  useEffect(() => {
    const getDataList = async () => {
      let data = [];
      for (let i = 0; i < 10; i++) {
        data[i] = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 500)}`
        )
          .then((response) => {
            return response.json();
          })
          .then((theData) => {
            return theData;
          });
        console.log(data[i]);
      }
      setLoading(false);
      setImageList(data);
    };
    getDataList();
    return () => {};
  }, []);

  return (
    <>
      {loading ? (
        <h2>Loading images</h2>
      ) : (
        imageList.map((data, index) => {
          return <img key={index} src={data.sprites.front_default} alt={`Pokemon ${index}`}></img>;
        })
      )}
      <div className="card-container">
        {cards.map((card) => {
          return card;
        })}
      </div>
    </>
  );
}
