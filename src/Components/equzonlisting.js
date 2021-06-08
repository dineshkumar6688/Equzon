import React from 'react';
import { Container,Row, Col, Card } from 'reactstrap';
function EquzonListing() {
    return (
        <div className="equzonlist">
            <Container>
            <h4 style={{textAlign:"center"}}>Equzon Listing</h4>
            <br />
            <Row>
                <Col  md={2} >
                    <Card className="featured"  >
                        <img src="horse1.jpg" width="100%" height="250px" className="rounded"/>
                        <div className="featured-text-center">
                          
                            <h6 className="click" >Click here to explore</h6>
                        </div>
                    </Card>
                    <h4 style={{textAlign:"center"}}>Horses</h4>
                </Col>
                <Col  md={2} >
                    <Card className="featured"  >
                        <img src="barns.jpg" width="100%" height="250px" className="rounded"/>
                        <div className="featured-text-center">
                          
                            <h6 className="click" >Click here to explore</h6>
                        </div>
                    </Card>
                    <h4 style={{textAlign:"center"}}>Barns</h4>
                </Col>
                <Col  md={2} >
                    <Card className="featured"  >
                        <img src="vets.jpg" width="100%" height="250px" className="rounded"/>
                        <div className="featured-text-center">
                          
                            <h6 className="click" >Click here to explore</h6>
                        </div>
                    </Card>
                    <h4 style={{textAlign:"center"}}>Vets</h4>
                </Col>
                <Col  md={2} >
                    <Card className="featured"  >
                        <img src="farrier.jpg" width="100%" height="250px" className="rounded"/>
                        <div className="featured-text-center">
                          
                            <h6 className="click" >Click here to explore</h6>
                        </div>
                    </Card>
                    <h4 style={{textAlign:"center"}}>Farriers</h4>
                </Col>
                <Col  md={2} >
                    <Card className="featured"  >
                        <img src="trans.jpg" width="100%" height="250px" className="rounded"/>
                        <div className="featured-text-center">
                          
                            <h6 className="click" >Click here to explore</h6>
                        </div>
                    </Card>
                    <h4 style={{textAlign:"center"}}>Transporters</h4>
                </Col>

                <Col  md={2} >
                    <Card className="featured"  >
                        <img src="tack.jpg" width="100%" height="250px" className="rounded"/>
                        <div className="featured-text-center">
                          
                            <h6 className="click" >Click here to explore</h6>
                        </div>
                    </Card>
                    <h4 style={{textAlign:"center"}}>Tack Shop</h4>
                </Col>
            </Row>
            </Container>
        </div>
    );
}
export default EquzonListing;