import "./FlightDurationCard.scss";

export default function FlightDurationCard() {
  return (
    <div className="flight-duration">
      <div className="flight-duration__container">
        <h2 className="flight-duration__title">Flight Duration</h2>
        <div className="flight-duration__button-container">
          <button className="flight-duration__button">Under 1 hr</button>
          <button className="flight-duration__button">1 - 3 hrs</button>
          <button className="flight-duration__button">1 - 3 hrs</button>
          <button className="flight-duration__button">6 - 8 hrs</button>
          <button className="flight-duration__button">8 hrs +</button>
        </div>
      </div>
    </div>
  );
}
