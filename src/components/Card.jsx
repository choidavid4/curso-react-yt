import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title = "titulo por defecto", description = "descripcion por defecto" }) {
  return (
    <div className="Card">
      <h2>
        <Link to={title}>{title}</Link>
      </h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
