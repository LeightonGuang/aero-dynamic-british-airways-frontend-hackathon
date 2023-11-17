import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import TestPage from "./pages/TestPageAfterLanding/TestPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
