import React from "react";
import NavBar from "./Components/Nav/NavBar.jsx";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
