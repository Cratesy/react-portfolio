import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import SkillSet from "./components/SkillSet";

const App = () => {
  return (
    <Router>
      <Navbar />
      <SkillSet />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
