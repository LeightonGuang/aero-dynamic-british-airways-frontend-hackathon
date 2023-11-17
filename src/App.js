import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import FormPage from "./pages/FormPage/FormPage";
import TestPage from "./pages/TestPageAfterLanding/TestPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/form" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
