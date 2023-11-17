import "./SuggestionCard.scss";
import baLogo from "../../assets/logos/british-airways-logo.svg";

const SuggestionCard = () => {
  return (
    <div className="card">
      <img
        className="card__image"
        src="https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="ba-bg">
        <img className="logo" src={baLogo} alt="ba logo" />
        <p className="card__location">Barcelona</p>
      </div>
      <div className="flight">
        <p className="flight__price">$300</p>
        <p className="flight__time">2 hours 25 minutes</p>
        <p className="flight__connection">Direct</p>
        <div>
          <p className="flight__reason">Because you selected</p>
          <p className="flight__pick">Warm, Nightlife, City</p>
          <ul className="flight__list">
            <li className="flight__pick">Warm wetaher in May</li>
            <li className="flight__pick">Famous for its unique Architecture</li>
            <li className="flight__pick">
              Lively nightlife in areas like Barri Gòtic and El Raval
            </li>
          </ul>
        </div>
        <div>
          <p className="flight__reason">Included in your voucher:</p>
          <ul className="flight__list">
            <li className="flight__pick">Flight</li>
          </ul>
        </div>
        <div>
          <p className="flight__reason">Available Add Ons</p>
          <ul className="flight__list">
            <li className="flight__pick">Seat Selection</li>
            <li className="flight__pick">Extra baggage</li>
          </ul>
        </div>
      </div>
      <div className="card__button">
        <button className="button__outline">remind me</button>
        <button className="button__primary">checkout</button>
      </div>
    </div>
  );
};

export default SuggestionCard;
