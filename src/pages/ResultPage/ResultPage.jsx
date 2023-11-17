import { useEffect } from "react";
import SuggestionCard from "../../components/SuggestionCard/SuggestionCard";
import "./ResultPage.scss";

const ResultPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="results">
      <section>
        <h1 className="results__title">Results for you...</h1>
        <p className="results__description">
          Based on your selections & your voucher allowances we recommend you
          fly to...
        </p>
        <SuggestionCard />
      </section>
    </div>
  );
};

export default ResultPage;
