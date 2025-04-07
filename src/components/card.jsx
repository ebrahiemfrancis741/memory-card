export default function Card({ placeHoldImg, pokemonImg, pokemonName }) {
  return (
    <div>
      <img className="card" src={placeHoldImg}  alt={pokemonName}></img>
    </div>
  );
}
