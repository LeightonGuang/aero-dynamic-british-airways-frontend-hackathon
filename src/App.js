import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import FormPage from "./pages/FormPage/FormPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
