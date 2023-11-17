import "./SuggestionCard.scss";
import baLogo from "../assets/logos/british-airways-logo.svg";

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
        <p>Barcelona</p>
      </div>
      <div className="flight">
        <p className="flight__price">$300</p>
        <p className="flight__time">2 hours 25 minutes</p>
        <p className="flight__connection">1 connection</p>
        <div>
          <p className="flight__reason">Because you selected</p>
          <p className="flight__pick">Warm, Nightlife, City</p>
        </div>
        <div>
          <p className="flight__reason">Included</p>
          <p className="flight__pick">Lorem Ipsum</p>
        </div>
        <div>
          <p className="flight__reason">Available Add Ons</p>
          <p className="flight__pick">Lorem Ipsum</p>
        </div>
      </div>
      <div className="card__button">
        <button>checkout</button>
        <button>remind me</button>
      </div>
    </div>
  );
};

export default SuggestionCard;
