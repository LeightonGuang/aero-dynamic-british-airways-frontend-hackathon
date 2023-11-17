import "./SuggestionCard.scss";
import baLogo from "../../assets/logos/british-airways-logo.svg";

const SuggestionCard = () => {
  return (
    <>
      <div className="card">
        <img
          className="card__image"
          src="https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="ba-bg">
          <img className="logo" src={baLogo} alt="ba logo" />
          <p className="card__location">Barcelona</p>
        </div>
        <div className="flight">
          <p className="flight__price">£117</p>
          <p className="flight__time">2 hours 05 minutes</p>
          <p className="flight__connection">Direct</p>
          <div>
            <p className="flight__reason reduce">Because you selected</p>
            <p className="flight__pick reduced">Warm, Nightlife, City</p>
            <ul className="flight__list">
              <li className="flight__pick">Warm wetaher in May</li>
              <li className="flight__pick">
                Famous for its unique Architecture
              </li>
              <li className="flight__pick">
                Lively nightlife in areas like Barri Gòtic and El Raval
              </li>
            </ul>
          </div>
          <div>
            <p className="flight__reason reduce">Included in your voucher:</p>
            <ul className="flight__list">
              <li className="flight__pick">Flight</li>
            </ul>
          </div>
          <div>
            <p className="flight__reason reduce">Available Add Ons</p>
            <ul className="flight__list">
              <li className="flight__pick">Seat Selection</li>
              <li className="flight__pick">Extra baggage</li>
            </ul>
          </div>
        </div>
        <div className="card__button">
          <a href="/end">
            <button className="button__outline">Save For Later</button>
          </a>
          <a href="/end">
            <button className="button__primary">Checkout</button>
          </a>
        </div>
      </div>

      <div className="card">
        <img
          className="card__image"
          src="https://images.unsplash.com/photo-1501927023255-9063be98970c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="ba-bg">
          <img className="logo" src={baLogo} alt="ba logo" />
          <p className="card__location">Lisbon, Portugal</p>
        </div>
        <div className="flight">
          <p className="flight__price">£108</p>
          <p className="flight__time">2 hours 55 minutes</p>
          <p className="flight__connection">Direct</p>
          <div>
            <p className="flight__reason">Because you selected</p>
            <p className="flight__pick">Warm, Nightlife, City</p>
            <ul className="flight__list">
              <li className="flight__pick">Pleasant wetaher in May</li>
              <li className="flight__pick">
                A city with historic charm and a thriving arts scene.
              </li>
              <li className="flight__pick">
                Bairro Alto is known for its nightlife and Fado music.
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
          <a href="/end">
            <button className="button__outline">Save For Later</button>
          </a>
          <a href="/end">
            <button className="button__primary">Checkout</button>
          </a>
        </div>
      </div>

      <div className="card">
        <img
          className="card__image"
          src="https://images.unsplash.com/photo-1554149082-75d460afced3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="ba-bg">
          <img className="logo" src={baLogo} alt="ba logo" />
          <p className="card__location">Nice, France</p>
        </div>
        <div className="flight">
          <p className="flight__price">£99</p>
          <p className="flight__time">2 hours 05 minutes</p>
          <p className="flight__connection">Direct</p>
          <div>
            <p className="flight__reason">Because you selected</p>
            <p className="flight__pick">Warm, Nightlife, City</p>
            <ul className="flight__list">
              <li className="flight__pick">
                Mediterranean climate with warm temperatures in May.
              </li>
              <li className="flight__pick">
                Explore the Promenade des Anglais and the Old Town.
              </li>
              <li className="flight__pick">
                Nice offers a sophisticated nightlife along the French Riviera.
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
          <a href="/end">
            <button className="button__outline">Save For Later</button>
          </a>
          <a href="/end">
            <button className="button__primary">Checkout</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default SuggestionCard;
