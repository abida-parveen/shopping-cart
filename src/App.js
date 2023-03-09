import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import useScrollToTop from "./hooks/useScrollToTop";
import Checkout from "./pages/Checkout";
import Collection from "./pages/Collection";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
  // ensuring that the page is scrolled to the top whenever the user navigates to a new route.
  useScrollToTop();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collection/:id" element={<Collection />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
