import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from "./components/stage12/Home";
import About from "./components/stage12/about/About";
import Contact from "./components/stage12//contact/Contact";
import Header from "./components/stage12/ui/Header";
import Footer from "./components/stage12/ui/Footer";

const App = () => {
  return (
    <>
        <Header />
        <Routes>
          <Route exact path="/kodecamp-task" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </>
  );
};

export default App;
