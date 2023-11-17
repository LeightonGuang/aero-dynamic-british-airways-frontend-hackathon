import FlightDurationCard from "../../components/FlightDurationCard/FlightDurationCard";
import "./ResultPage.scss";

export default function ResultPage() {
  return (
    <div className="result">
      <div className="result__container">
        <article className="result__form-card">
          <form action=""></form>
        </article>

        <div className="result__title-container">
          <h1 className="result__title">Tell us more about your flight</h1>
          <p className="result__title-description">
            Select at least 3 options from each category
          </p>
        </div>

        <FlightDurationCard />
      </div>
    </div>
  );
}
