import "./CalendarCard.scss";

export default function CalendarCard() {
  return (
    <div className="calendar">
      <div className="calendar__container">
        <form action="" className="calendar__form">
          <div className="calendar__inputs-container">
            <div className="calendar__input-container">
              <input
                type="radio"
                id="oneWay"
                name="trip"
                value="One Way"
                className="calendar__input"
              />
              <label htmlFor="oneWay" className="calendar__label">
                One Way
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="roundTrip"
                name="trip"
                value="Round Trip"
              />
              <label htmlFor="oneWay" className="calendar__label">
                Round Trip
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
