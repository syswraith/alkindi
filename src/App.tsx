import { BrowserRouter, Route, Routes } from "react-router-dom";
import Monoalphabetic from "./pages/Monoalphabetic";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/monoalphabetic" element={<Monoalphabetic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
