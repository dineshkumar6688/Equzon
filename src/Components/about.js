import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const about = () => {
  return (
    <Container className="about-container">
      <div className="about">
        <div>
          <h4>About Equzon</h4>
        </div>
        <div className="mt-1">
          Lorem lpsum is simply dummy text of the printing and typesetting
          industry.Lorem lpsum has been the industry's standard dummy text ever
          since the 1500s,when an unknown printer took a gallery of type and
          scrambled it to make a type specimen book.
        </div>
        <Container>
          <Row className="p-3">
            <Col lg={4}>
              <img className="img-fluid w-25" src="search-horse.png" alt="" />
              
              <h5>Search Horse Listing</h5>
              <p>
                Lorem lpsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Col>
            <Col lg={4}>
              <img className="img-fluid w-25" src="check-availability.png" alt="" />
              <h5>Check Availability</h5>
              <p>
                Lorem lpsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Col>
            <Col lg={4}>
              <img className="img-fluid w-25" src="schedule.png" alt="" />
              <h5>Schedule a Date</h5>
              <p>
                Lorem lpsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Col>
          </Row>
          <button className="about-button">Add My Horse Business Now</button>
        </Container>
      </div>
    </Container>
  );
};

export default about;
