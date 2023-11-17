import CalendarCard from "../../components/CalendarCard/CalendarCard";
import FlightDurationCard from "../../components/FlightDurationCard/FlightDurationCard";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import "./FormPage.scss";
import { Link } from "react-router-dom";
import "../ProfilePage/ProfilePage.scss";

export default function FormPage() {
  return (
    <div className="result">
      <div className="result__container">
        <CalendarCard />

        <div className="result__title-container">
          <h1 className="result__title">Tell us more about your flight</h1>
          <p className="result__title-description">
            Select at least 3 options from each category
          </p>
        </div>

        <div className="result__option-container">
          <FlightDurationCard />
          <WeatherCard />
        </div>

        <div>
          <Link to="/results" className="profile__link">
            <div className="profile__btn-container">
              <button className="profile__btn">Find Me A Flight</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
