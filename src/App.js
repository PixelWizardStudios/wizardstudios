import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Websites from "./pages/Websites";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="stars">
      <div className="App">
        <Router>

          <Navbar />

          <Routes>

            <Route path="/" exact Component={Home} />

            <Route path="/websites" exact Component={Websites} />

            <Route path="/about" exact Component={About} />

            <Route path="/contact" exact Component={Contact} />

          </Routes>

          <Footer />
          
        </Router>

    </div>
    </div>
  );
}

export default App;
