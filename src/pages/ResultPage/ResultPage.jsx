import CalendarCard from "../../components/CalendarCard/CalendarCard";
import FlightDurationCard from "../../components/FlightDurationCard/FlightDurationCard";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import "./ResultPage.scss";

export default function ResultPage() {
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
      </div>
    </div>
  );
}
