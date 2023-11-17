import CalendarCard from "../../components/CalendarCard/CalendarCard";
import OptionCard from "../../components/OptionCard/OptionCard";
import "./FormPage.scss";
import { Link } from "react-router-dom";
import "../ProfilePage/ProfilePage.scss";

export default function FormPage() {
  return (
    <div className="form">
      <div className="form__container">
        <CalendarCard />

        <div className="form__title-container">
          <h1 className="form__title">Ready for takeoff?</h1>
          <p className="form__title-description">
            Choose at least one option from each category below to help us
            tailor your flight experience Don't worry, it's as easy as picking
            your favorite travel buddy. Bon voyage!
          </p>
        </div>

        <div className="form__option-container">
          <OptionCard
            topic="Flight Duration"
            options={[
              "Quick Getaway (1-3 hours)",
              "Midday Escapade (4-6 hours)",
              "Epic Expedition (7+ hours)",
            ]}
          />
          <OptionCard
            topic="Weather Wonderland"
            options={["Sun Seeker", "Mild Marvel", "Winter Wonderland"]}
          />
          <OptionCard
            topic="Passionate Pursuits"
            options={[
              "Culinary Connoisseur",
              "Art Admirer",
              "Sports Enthusiast",
              "Nature Lover",
              "Music Maestro",
              "Tech Explorer",
            ]}
          />
          <OptionCard
            topic="City Chic or Remote Retreat"
            options={[
              "City Slicker",
              "Countryside Charmer",
              "Remote Bliss",
              "Urban Explorer",
              "Beach Bliss",
              "Adventure Aficionado",
            ]}
          />
          <OptionCard
            topic="Flight Connection Conundrum"
            options={[
              "Direct Diva",
              "Layover Lover",
              "Surprise Me! (Mix of both)",
            ]}
          />
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
