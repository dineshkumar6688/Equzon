/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Form, Button } from "react-bootstrap";

const bannerForm = () => {
  return (
    <div className="d-flex justify-content-center m-4">
      <Form className="banner-form">
        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            className="banner-form-check"
            type="checkbox"
            label="Horse"
          />
          <Form.Check
            className="banner-form-check"
            type="checkbox"
            label="Barns"
          />
          <Form.Check
            className="banner-form-check"
            type="checkbox"
            label="Vets"
          />
          <Form.Check
            className="banner-form-check"
            type="checkbox"
            label="Farriers"
          />
          <Form.Check
            className="banner-form-check"
            type="checkbox"
            label="Other Services"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="formBasicPassword"
        >
          <Form.Control
            style={{ width: "50%", borderRadius: "30px" }}
            className="mr-3 banner-form-input"
            type="password"
            placeholder="Choose above options and type city state zipcode"
          />
          <Button
            className={{ height: "35px" }}
            variant="primary"
            type="submit"
          >
            <span>&#x1F50D;</span>
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default bannerForm;
