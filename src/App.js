import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";
import SmButtons from "./components/SmButtons";
import SplitButton from "./components/LinkedButtons";
import InformationSection from "./components/InformationSection";
import PremiumThemes from "./components/PremiumThemes";
import OurSpon from "./components/Sponsors";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <MainBody />
      <SplitButton />
      <SmButtons />
      <InformationSection />
      <PremiumThemes />
      <OurSpon />
      <Portfolio />
    </React.Fragment>
  );
}

export default App;
