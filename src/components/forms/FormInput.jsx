import React from "react";
import { Button, Form } from "react-bootstrap";

const FormInput = () => {
  return (
    <div className="container form-area p-3 mt-5 mb-5">
      <h1 className="text-center">Subscribe to our NewsLetter</h1>
      <Form className="mt-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="h4">Your Email Address</Form.Label>
          <Form.Control type="email" placeholder="user.name@somedomain.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="h4">Leave some feedback</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button className="w-25" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormInput;
