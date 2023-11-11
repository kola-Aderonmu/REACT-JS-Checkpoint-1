import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarArea from "./components/navbar/Navbar/NavbarArea";
import CardSection from "./components/cards/CardSection";
import FormInput from "./components/forms/FormInput";
import HeroHeadImg from "./components/herohead/HeroHeadImg";

const App = () => (
  <Fragment>
    <div className="App">
      {/* React-Bootstrap Navbar is here */}
      <NavbarArea></NavbarArea>
      {/* -------------------------------- */}

      {/* Hero Headimg  is here */}
      <HeroHeadImg></HeroHeadImg>
      {/* ------------------------ */}

      {/* React-bootstrap cards is here */}
      <CardSection></CardSection>
      {/* ------------------------------ */}

      {/*React-Bootstap Form is here */}
      <FormInput></FormInput>
      {/* ------------------------------------ */}
    </div>
  </Fragment>
);

export default App;
