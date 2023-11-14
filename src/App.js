import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { cardItems } from "./data";
import {
  Navbar,
  Form,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faUsers,
  faCalendarCheck,
  faChartSimple,
  faGear,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

const handleUsersAuthorizationClick = () => {
  alert("This page is still under construction");
};

{
  /*------CODES------- */
}

const App = () => (
  <Fragment>
    <div className="App">
      {/* React-Bootstrap Navbar is here */}
      <div
        style={{
          backgroundColor: "#e6e6fa",
          boxShadow: "rgba(0, 0, 0, 0.8) 20px 25px 25px",
          position: "sticky",
          zIndex: "1",
          top: 0,
        }}
      >
        <div className="p-4 mlr-4 container">
          {/* Nav-bar region */}

          <Navbar className="container">
            <Navbar.Brand href="#home" className="h3 text-center">
              {/* logo is here */}
              <img
                style={{ height: "50px" }}
                src="https://2.bp.blogspot.com/-vBm4xfczYjw/TwyjrhGSlyI/AAAAAAABBP8/O0Mv1M_Targ/s320/Nigeria_Flag.GIF"
                alt="Nigerian-Flag"
              />{" "}
            </Navbar.Brand>
            {/* The flex navbar text is here */}
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="h3 text-primary">
                <NavDropdown
                  title="Menu"
                  id="collasible-nav-dropdown"
                  style={{ fontWeight: "60", fontSize: "20px" }}
                  className="dropstart"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    onClick={handleUsersAuthorizationClick}
                  >
                    <FontAwesomeIcon
                      icon={faUsers}
                      style={{ marginRight: "5px" }}
                    />
                    Users Authorisation
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.2"
                    onClick={handleUsersAuthorizationClick}
                  >
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      style={{ marginRight: "5px" }}
                    />
                    Book an appointment
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.3"
                    onClick={handleUsersAuthorizationClick}
                  >
                    <FontAwesomeIcon
                      icon={faChartSimple}
                      style={{ marginRight: "5px" }}
                    />
                    Visitors' Records
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item
                    href="#"
                    onClick={handleUsersAuthorizationClick}
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={faGear}
                      spin
                      style={{ marginRight: "5px" }}
                    />
                    Administrator
                  </NavDropdown.Item>
                </NavDropdown>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      {/* -------------------------------- */}

      {/* React-bootstrap cards is here */}
      <Container>
        <Row className="mt-2 g-5">
          <h1
            style={{
              fontFamily: "Roboto, sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Visitors Management System
          </h1>
          {cardItems.map((item) => (
            <Col
              key={item.cardTitle}
              className=" d-flex justify-content-center algin-items-stretch"
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  src={item.img}
                  alt={item.cardTitle}
                  style={{ width: "8rem", margin: "auto" }}
                />
                <Card.Body
                  className="d-flex flex-column justify-content-between"
                  style={{
                    backgroundColor: "rgb(230,244,223)",
                  }}
                >
                  <Card.Title>
                    <h4
                      style={{
                        textAlign: "center",
                        textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
                        fontWeight: "700",
                      }}
                    >
                      {item.cardTitle}
                    </h4>
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "#800000",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    {item.cardText}
                  </Card.Text>
                  {/* The card button is  here */}
                  <Button
                    style={{
                      backgroundColor: "#517575",
                      cursor: "cell",
                      letterSpacing: "3px",
                      transition: "background-color 0.3s ease-in-out",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#6b8c8c")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#517575")
                    }
                  >
                    APPOINTMENTS
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/* ------------------------------ */}
      {/* --------------------------------------END---------------------------------------------------- */}

      {/*React-Bootstap Form is here */}
      <div
        className="container form-area p-3 mt-5 mb-5"
        style={{ border: "none", marginLeft: "80px" }}
      >
        <h1
          style={{
            fontFamily: "Roboto, sans-serif",
            textShadow: "2px 1px 1px rgba(0, 0, 0, 0.5)",
            cursor: "cell",
            transition: "background-color 0.3s",
          }}
        >
          Comments Section
        </h1>
        <Form className="mt-4" style={{ width: "70%", marginLeft: "50px" }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="h4">Email Address</Form.Label>
            <Form.Control type="email" placeholder="user.name@somedomain.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="h4">Some comments</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button className="w-36" variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      {/* ------------------------------------ */}
    </div>
  </Fragment>
);

export default App;
