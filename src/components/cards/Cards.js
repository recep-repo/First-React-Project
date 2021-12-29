import "./Cards.css";
import { data } from "../../helpers/data";

const Cards = () => {
  return (
    <div className="card-container">
      {data.map((card, index) => {
        return (
          <div className="cards" key={index}>
            <div className="title">
              <span className="card-title">{card.title}</span>
            </div>
            <img src={card.image} alt={card.title} />
            <h4 className='card-over'>{card.desc}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;