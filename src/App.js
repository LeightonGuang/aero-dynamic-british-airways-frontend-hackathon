import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultPage from "./pages/ResultPage/ResultPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
