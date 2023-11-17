import "./ProfilePage.scss";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  return (
    <section className="profile">
      <div className="profile__container"></div>
      <div className="profile__wrapper">
        <div className="profile__info">
          <h2 className="profile__welcome">Welcome Back, John</h2>
          <h1 className="profile__voucher">Here are your voucher details:</h1>
        </div>
        <div className="profile__details">
          <div className="profile__wrapper-container">
            <div className="profile__passenger-details">
              <div className="profile__passenger-info">
                <div className="profile__passenger-name">
                  <p className="profile__heading">Passenger Name:</p>
                  <p className="profile__description">John Smith</p>
                </div>
                <div className="profile__voucher-value">
                  <p className="profile__heading">Voucher Value:</p>
                  <p className="profile__description">£300</p>
                </div>
              </div>
              <div className="profile__original-depature">
                <p className="profile__heading">Original Depature:</p>
                <p className="profile__description">June 16 2020</p>
              </div>
              <div className="profile__voucher-info">
                <div className="profile__voucher-expiry">
                  <p className="profile__heading">Voucher Expiry Date:</p>
                  <p className="profile__description">June 16, 2020</p>
                </div>
                <div className="profile__voucher-number">
                  <p className="profile__heading">Vouher No.</p>
                  <p className="profile__description">June 16, 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile__find__more">
            <h2 className="profile__where">
              Not sure where you/can want to go?
            </h2>
            <p className="profile__find">
              Use our 'find my perfect destination' tool and we'll do the rest
            </p>
            <Link to="/form" className="profile__link">
              <div className="profile__btn-container">
                <button className="profile__btn">Find Me A Flight</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
