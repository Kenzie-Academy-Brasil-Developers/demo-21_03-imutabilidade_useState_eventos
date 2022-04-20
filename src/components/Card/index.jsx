import Button from "../Button";
import "./styles.css";

const Card = ({ info, func }) => {
  const { country, population, size } = info;
  return (
    <div className="content_card">
      <h3>{country}</h3>
      <p>{population}</p>
      <span>{size}</span>

      <Button
        className="content-button-red"
        func={() => func(country)}
        title="Delete País"
      />
    </div>
  );
};

export default Card;
