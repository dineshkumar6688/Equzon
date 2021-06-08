import React from 'react';
import { Container, Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { Checkmark } from 'react-checkmark'
import ReactStars from "react-rating-stars-component";

function Featured() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div>
            <Container>
            <h4 style={{textAlign:"center"}}>Featured Horses, Barns, Vets, Farriers in your area</h4>
            <br />
            <Row>
                <Col md={3}>
                    <Card className="featured">
                        <img src="horse.jpg" width="100%" height="250px" />
                        <div className="featured-text">
                            <Row className="title"><Col>Featured Horses</Col><Col><Checkmark size="small" /></Col></Row>
                            <Badge className="badge-dark">Houston, TX</Badge>
                            <h6 className="desc">Approximately 6 miles away from houston</h6>
                        </div>
                    </Card>
                    <Card.Footer>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <div>
                                <ReactStars
                                    count={4}
                                    onChange={ratingChanged}
                                    size={16}
                                    activeColor="#000000"

                                /></div>
                                <div>(4)</div>
                            </div>
                            <div>
                            <i class="fa">&#xf142;</i>
                            </div>
                        </div>
                    </Card.Footer>


                </Col>
                <Col md={3}>
                    <Card className="featured">
                        <img src="horse.jpg" width="100%" height="250px" />
                        <div className="featured-text">
                            <Row className="title"><Col>Featured Barns</Col><Col><Checkmark size="small" /></Col></Row>
                            <Badge className="badge-dark">Houston, TX</Badge>
                            <h6 className="desc">Approximately 6 miles away from houston</h6>
                        </div>
                    </Card>
                    <Card.Footer>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <div>
                                <ReactStars
                                    count={3}
                                    onChange={ratingChanged}
                                    size={16}
                                    activeColor="#000000"

                                /></div>
                                <div>(3)</div>
                            </div>
                            <div>
                            <i class="fa">&#xf142;</i>
                            </div>
                        </div>
                    </Card.Footer>

                </Col>
                <Col md={3}>
                    <Card className="featured">
                        <img src="horse.jpg" width="100%" height="250px" />
                        <div className="featured-text">
                            <Row className="title"><Col>Featured Vets/Farriers</Col><Col><Checkmark size="small" /></Col></Row>
                            <Badge className="badge-dark">Houston, TX</Badge>
                            <h6 className="desc">Approximately 6 miles away from houston</h6>
                        </div>
                    </Card>
                    <Card.Footer>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <div>
                                <ReactStars
                                    count={3}
                                    onChange={ratingChanged}
                                    size={16}
                                    activeColor="#000000"

                                /></div>
                                <div>(3)</div>
                            </div>
                            <div>
                            <i class="fa">&#xf142;</i>
                            </div>
                        </div>
                    </Card.Footer>

                </Col>
                <Col md={3}>
                    <Card className="featured">
                        <img src="horse.jpg" width="100%" height="250px" />
                        <div className="featured-text">
                            <Row className="title"><Col>Featured Tack Shop</Col><Col><Checkmark size="small" /></Col></Row>
                            <Badge className="badge-dark">Houston, TX</Badge>
                            <h6 className="desc">Approximately 6 miles away from houston</h6>
                        </div>
                    </Card>
                    <Card.Footer>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <div>
                                <ReactStars
                                    count={4}
                                    onChange={ratingChanged}
                                    size={16}
                                    activeColor="#000000"

                                /></div>
                                <div>(4)</div>
                            </div>
                            <div>
                            <i class="fa">&#xf142;</i>
                            </div>
                        </div>
                    </Card.Footer>
                </Col>
            </Row>
            <br/>
            <div style={{textAlign:"center"}}>
            <button className="btn btn-dark" style={{borderRadius:"30px"}}>Add your Listing</button>
            </div>
            <br/>
            </Container>
        </div>
    );
}
export default Featured;
