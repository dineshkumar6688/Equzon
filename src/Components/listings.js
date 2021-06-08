import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const listings = () => {
  return (
    <div className="container listing">
      <div className="title text-center">
        <h4>Add Your Listings</h4>
      </div>
      <Container className="text-center">
        <Row className="listing-row">
          <Col className="listing-bg" md={2}>
            <img className="img-fluid w-50 listingImg" src="horse-svg.png" alt="" />
          </Col>
          <Col className="listing-bg" md={2}>
            <img className="img-fluid w-50 listingImg" src="barns-svg.png" alt="" />

          </Col>
          <Col className="listing-bg" md={2}>
            <img className="img-fluid w-50 listingImg" src="vet-svg.png" alt="" />
          </Col>
          <Col className="listing-bg" md={2}>
            <img className="img-fluid w-50 listingImg" src="farrier-svg.png" alt="" />
          </Col>
          <Col className="listing-bg" md={2}>
            <img className="img-fluid w-50 listingImg" src="trans-svg.png" alt="" />
          </Col>
          <Col className="listing-bg" md={2}>
            <img className="img-fluid w-50 listingImg" src="tack-svg.png" alt="" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h4>Horses</h4>
          </Col>
          <Col>
            <h4>Barns</h4>
          </Col>
          <Col>
            <h4>Vets</h4>
          </Col>
          <Col>
            <h4>Farriers</h4>
          </Col>
          <Col>
            <h4>Transporters</h4>
          </Col>
          <Col>
            <h4>Tack Shop</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default listings;
