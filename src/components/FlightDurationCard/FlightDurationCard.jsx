import PillButton from "../PillButton/PillButton";
import "./FlightDurationCard.scss";

export default function FlightDurationCard() {
  return (
    <div className="flight-duration">
      <div className="flight-duration__container">
        <h2 className="flight-duration__title">Flight Duration</h2>
        <div className="flight-duration__button-container">
          <PillButton text="Under 1 hour" />
          <PillButton text="1 - 3 hrs" />
          <PillButton text="3 - 6 hrs" />
          <PillButton text="6 - 8 hrs" />
          <PillButton text="8 hrs +" />
        </div>
      </div>
    </div>
  );
}
