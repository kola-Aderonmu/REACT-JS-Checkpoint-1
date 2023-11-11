import React from "react";
import { Container, Card, Row, Col, Button, Badge } from "react-bootstrap";
import { cardItems } from "../../data";

const CardSection = () => {
  return (
    // Cards information/content originates fromm data.js
    <Container>
      <Row className="mt-4 g-5">
        <h1 className="text-center">Our Managers</h1>
        {cardItems.map((item) => (
          <Col
            key={item.cardTitle}
            className=" d-flex justify-content-center algin-items-stretch"
          >
            <Card style={{ width: "20rem" }}>
              {/* Card image is here */}
              <Card.Img
                src={item.img}
                alt={item.cardTitle}
                style={{
                  borderRadius: " 0 0 20px 20px",
                }}
              />
              <Card.Body
                className="d-flex flex-column justify-content-between"
                style={{ backgroundColor: "rgb(249,244,223)" }}
              >
                <Card.Title>
                  <h4>{item.cardTitle}</h4>
                </Card.Title>
                <h6>
                  <Badge bg="secondary">{item.cardWalk}</Badge>
                </h6>
                <h6>
                  <Badge bg="secondary">{item.cardShuttle}</Badge>
                </h6>
                <Card.Text>{item.cardText}</Card.Text>
                {/* The card button is  here */}
                <Button style={{ backgroundColor: "#506175" }}>
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardSection;
