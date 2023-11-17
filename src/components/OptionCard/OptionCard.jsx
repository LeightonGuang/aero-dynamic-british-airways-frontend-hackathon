import PillButton from "../PillButton/PillButton";
import "./OptionCard.scss";

export default function FlightDurationCard({ topic, options }) {
  return (
    <div className="flight-duration">
      <div className="flight-duration__container">
        <h2 className="flight-duration__title">{topic}</h2>
        <div className="flight-duration__button-container">
          {options.map((option, index) => (
            <PillButton text={option} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
