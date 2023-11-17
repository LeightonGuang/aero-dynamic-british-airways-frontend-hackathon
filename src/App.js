import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="profile" element={<ProfilePage />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
