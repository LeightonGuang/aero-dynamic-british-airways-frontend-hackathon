import "./ProfilePage.scss";

export default function ProfilePage() {
  return (
    <section className="profile">
      <div className="profile__container"></div>
      <div className="profile__info">
        <h2>Welcome Back, John</h2>
        <h1>Here are your voucher details:</h1>
      </div>
      <div className="profile__details">
        <div className="profile__passenger__details">
          <div className="profile__passenger-name">
            <p>Passenger Name:</p>
            <p>John Smith</p>
          </div>
          <div className="profile__voucher-value">
            <p>Voucher Value:</p>
            <p>£300</p>
          </div>
        </div>
        <div className="profile__original-depature">
          <p>Original Depature:</p>
          <p>June 16 2020</p>
        </div>
        <div className="profile__voucher__info">
          <div className="profile__voucher__expiry">
            <p>Voucher Expiry Date:</p>
            <p>June 16, 2020</p>
          </div>
          <div className="profile__voucher-number">
            <p>Vouher No.</p>
            <p>June 16, 2020</p>
          </div>
        </div>
        <div className="profile__find__more">
          <h2>Not sure where you/can want to go?</h2>
          <p>
            Use our 'find my perfect destination' tool and we'll do the rest
          </p>
          <button>Find Me A Flight</button>
        </div>
      </div>
    </section>
  );
}
