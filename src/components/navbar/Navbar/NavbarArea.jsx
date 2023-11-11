import React from "react";
import { Navbar } from "react-bootstrap";
const NavbarArea = () => {
  return (
    <div
      className="p-3 mlr-3"
      style={{
        backgroundColor: "rgb(250,244,233)",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <Navbar className="container">
        <Navbar.Brand href="#home" className="h2 text-center">
          {/* logo is here */}
          <img
            style={{ width: "70px", height: "70px" }}
            src="https://p1.hiclipart.com/preview/196/853/315/react-logo-javascript-stack-overflow-front-and-back-ends-github-freecodecamp-redux-computer-software-png-clipart.jpg"
            alt="Nabar logo"
          />{" "}
        </Navbar.Brand>
        {/* The flex navbar text is here */}
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="h3 text-primary">
            Signed in as: <a href="#login"> Mark Ade</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarArea;
