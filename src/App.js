import "./App.css";
import Calculator from "./components/Calculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quote from "./components/Quote";
import Head from "./components/Head";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Head />}>
              <Route index element={<Home />} />
              <Route path="/Quote" element={<Quote />} />
              <Route path="/Calculator" element={<Calculator />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
