import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultPage from "./pages/ResultPage/ResultPage";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/results" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
