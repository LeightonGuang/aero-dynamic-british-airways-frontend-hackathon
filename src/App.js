import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ResultPage from "./pages/ResultPage/ResultPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
