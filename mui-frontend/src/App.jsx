import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar";
import Tour from "./pages/Tour";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/:id" element={<Tour />} />
        <Route path="/services" element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
