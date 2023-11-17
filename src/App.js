import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import FormPage from "./pages/FormPage/FormPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import TestPage from "./pages/TestPageAfterLanding/TestPage";
import "./App.scss";

import ProfilePage from "./pages/ProfilePage/ProfilePage";

import "./App.scss";
import End from "./pages/End/End";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/results" element={<ResultPage />} />
          <Route path="/form" element={<TestPage />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
