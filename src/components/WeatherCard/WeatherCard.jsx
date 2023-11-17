import "./WeatherCard.scss";
export default function WeatherCard() {
  return (
    <div className="weather">
      <div className="weather__container">
        <h2 className="weather__title">Flight Duration</h2>
        <div className="weather__button-container">
          <button className="weather__button">Tropical</button>
          <button className="weather__button">Option 2</button>
          <button className="weather__button">Option 3</button>
        </div>
      </div>
    </div>
  );
}
