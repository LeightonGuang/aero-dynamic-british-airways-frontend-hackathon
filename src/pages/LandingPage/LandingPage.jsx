import "./LandingPage.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LandingPage() {
  let navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/profile");
    }, 1500); // 5000 ms = 5 seconds

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount
  }, [navigate]);

  return (
    <div className="landing">
      <div className="landing__logo-container">
        <img
          src="ba-full-logo.png"
          alt="Ba Full Logo"
          className="landing__logo fadeout"
        />
      </div>
    </div>
  );
}
export default LandingPage;
