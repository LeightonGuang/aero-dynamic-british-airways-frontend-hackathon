import SuggestionCard from "../../SuggestionCard/SuggestionCard";
import "./ResultPage.scss";

const ResultPage = () => {
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
