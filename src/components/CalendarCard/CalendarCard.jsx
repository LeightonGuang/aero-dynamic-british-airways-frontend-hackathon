import "./CalendarCard.scss";
import calendarIcon from "../../assets/icons/calendar_icon.svg";

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
                className="calendar__radio"
              />
              <label htmlFor="oneWay" className="calendar__label">
                One Way
              </label>
            </div>
            <div className="calendar__input-container">
              <input
                type="radio"
                id="roundTrip"
                name="trip"
                value="Round Trip"
                className="calendar__radio"
              />
              <label htmlFor="oneWay" className="calendar__label">
                Round Trip
              </label>
            </div>
          </div>
          {/* all the drop downs container */}
          <div className="calendar__dropdowns-container">
            {/* first row of drop downs */}
            <div className="calendar__dropdown-date-container">
              {/* depart dropdown */}
              <div className="calendar__dropdown">
                <span className="calendar__dropdown--title">Depart</span>
                <div className="calendar__dropdown--date-container">
                  <img
                    src={calendarIcon}
                    alt="calendar icon"
                    className="calendar__dropdown--calendar-icon"
                  />
                  <span className="calendar__dropdown--text">
                    18 November 2023
                  </span>
                </div>
              </div>
              {/* return dropdown */}
              <div className="calendar__dropdown">
                <span className="calendar__dropdown--title">Return</span>
                <div className="calendar__dropdown--date-container">
                  <img
                    src={calendarIcon}
                    alt="calendar icon"
                    className="calendar__dropdown--calendar-icon"
                  />
                  <span className="calendar__dropdown--text">
                    30 November 2023
                  </span>
                </div>
              </div>
            </div>
            {/* second row of drop downs */}
            <div className="calendar__dropdown-date-container">
              {/* depart dropdown */}
              <div className="calendar__dropdown">
                <span className="calendar__dropdown--title">Passenger/s</span>
                <div className="calendar__dropdown--date-container">
                  <span className="calendar__dropdown--text">1 Adult</span>
                </div>
              </div>
              {/* return dropdown */}
              <div className="calendar__dropdown">
                <span className="calendar__dropdown--title">Class</span>
                <div className="calendar__dropdown--date-container">
                  <span className="calendar__dropdown--text">Economy</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
