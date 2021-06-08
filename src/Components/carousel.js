import React from 'react';
import Carousel from 'react-elastic-carousel'
import { Row, Col, Card } from 'react-bootstrap'
import { CardBody } from 'reactstrap';

function Slide() {


    return (
        <div>
            <div className="slider">
                <h4 style={{textAlign:"center"}}>Events Near You</h4>
            <Carousel itemsToShow={3}>
                <Row>
                    <Card style={{ margin: "20px" }}>
                        <img className="img-fluid" src='horse.jpg' />
                    </Card>
                    <CardBody>
                        <Row>
                        <Col md={2}>
                            <img src="calender.jpg" width="40px" />
                        </Col>
                        <Col style={{fontSize:"9px"}}>
                            <Row>Lorem ipsum dolor sit amet</Row>
                            <Row>8.00</Row>
                            <Row>Ut nec vulputate enim.Nulla faucibus convallis dui.Donec arcu enim, scelerisque</Row>
                        </Col>
                        </Row>
                    </CardBody>
                </Row>
                <Row>
                    <Card style={{ margin: "20px" }}>
                        <img className="img-fluid" src='horse.jpg' />
                    </Card>
                    <CardBody>
                        <Row>
                        <Col md={2}>
                            <img src="calender.jpg" width="40px" />
                        </Col>
                        <Col style={{fontSize:"9px"}}>
                            <Row>Lorem ipsum dolor sit amet</Row>
                            <Row>8.00</Row>
                            <Row>Ut nec vulputate enim.Nulla faucibus convallis dui.Donec arcu enim, scelerisque</Row>
                        </Col>
                        </Row>
                    </CardBody>
                </Row>
                <Row>
                    <Card style={{ margin: "20px" }}>
                        <img className="img-fluid" src='horse.jpg' />
                    </Card>
                    <CardBody>
                        <Row>
                        <Col md={2}>
                            <img src="calender.jpg" width="40px" />
                        </Col>
                        <Col style={{fontSize:"9px"}}>
                            <Row>Lorem ipsum dolor sit amet</Row>
                            <Row>8.00</Row>
                            <Row>Ut nec vulputate enim.Nulla faucibus convallis dui.Donec arcu enim, scelerisque</Row>
                        </Col>
                        </Row>
                    </CardBody>
                </Row>
                <Row>
                    <Card style={{ margin: "20px" }}>
                        <img className="img-fluid" src='horse.jpg' />
                    </Card>
                    <CardBody>
                        <Row>
                        <Col md={2}>
                            <img src="calender.jpg" width="40px" />
                        </Col>
                        <Col style={{fontSize:"9px"}}>
                            <Row>Lorem ipsum dolor sit amet</Row>
                            <Row>8.00</Row>
                            <Row>Ut nec vulputate enim.Nulla faucibus convallis dui.Donec arcu enim, scelerisque</Row>
                        </Col>
                        </Row>
                    </CardBody>
                </Row>
            </Carousel>
        </div>
        <br/>
        </div>

    )


}

export default Slide;