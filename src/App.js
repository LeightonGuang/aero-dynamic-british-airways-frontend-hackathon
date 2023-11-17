import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultPage from "./pages/ResultPage/ResultPage";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import TestPage from "./pages/TestPageAfterLanding/TestPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<LandingPage />} />
  <Route path="/results" element={<ResultPage />} />
          <Route path="/form" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
