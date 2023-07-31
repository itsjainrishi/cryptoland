import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Register from "./pages/Register";
import Coin from "./pages/Coin";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/register" element={<Register />} />
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
