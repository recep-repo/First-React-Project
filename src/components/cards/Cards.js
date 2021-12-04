// import "./Cards.css"
// import {data} from "../../helpers/data"

// const Cards = () => {
//     return (
//         <div className="card">
//             {
//                 data.map((card, id) => {
//                     return(
//                     <div className="cards" key={id}>
//                         <div className="title">
//                             <h2>{card.title}</h2>
//                         </div>
//                         <img src={card.image} alt={card.title}/>
//                         <div className="desc">
//                             <p>{card.desc}</p>
//                         </div>
//                     </div>
//                     );
//                 })
//             }
//         </div>
//     );
// };

// export default Cards;

import "./Cards.css";
import { data } from "../../helpers/data";
console.log(data);
const Cards = () => {
  return (
    <div className="card">
      {data.map((card, index) => {
        return (
          <div className="cards" key={index}>
            <div className="title">
              <h2>{card.title}</h2>
            </div>
            <img src={card.image} alt={card.title} />
            <div className="desc">
              <p>{card.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;