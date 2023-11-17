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
          <h1 className="form__title">Tell us more about your flight</h1>
          <p className="form__title-description">
            Select at least 3 options from each category
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
            topic="City Chic or Remote Retreat"
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
            topic="Flight Connection Conundrum"
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
            topic="Passionate Pursuits"
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
