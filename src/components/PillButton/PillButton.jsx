import "./PillButton.scss";
import { useState } from "react";

function PillButton({ text }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  };

  return (
    <button
      onClick={handleClick}
      className={
        clicked
          ? "flight-duration__button--selected"
          : "flight-duration__button"
      }
    >
      {text}
    </button>
  );
}
export default PillButton;
