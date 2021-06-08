import React from 'react';
import 'font-awesome/css/font-awesome.css'
import '../Style/footer.css';
import { Container, Col, Row, Image } from 'reactstrap'

function Footer() {
    return (
        <div className="footer">
            
            <Row>
                <Col style={{textAlign:"center"}} md={4}>
                    <img src="circle.png"  width="50%" />
                </Col>
                <Col md={2}>

                    <Row>&#x27A4; About Us</Row>
                    <Row>&#x27A4; Contact Us</Row>
                    <Row>&#x27A4; Why List</Row>
                    <Row>&#x27A4; Blog</Row>
                </Col>
                <Col md={2}>

                    <Row>&#x27A4; Pricing</Row>
                    <Row>&#x27A4; FAQ</Row>
                    <Row>&#x27A4; Privacy</Row>
                    <Row>&#x27A4; Terms of Use</Row>
                </Col>
                <Col md={3}>
                    <Row style={{paddingBottom:"8px"}}>Contact</Row>
                    <Row>Lorem Ipsum is simply dummy</Row>
                    <Row>text of the printing and rypesetting</Row>
                    <Row>industry.</Row>
                    <Row>

                        <div style={{ paddingTop: "5px" }}>

                            <img src='fb.png' width="10%" />
                            <img src='twitter.png' width="10%" />
                            <img src='youtube.jpg' width="12%" />

                        </div>

                    </Row>
                </Col>
            </Row>
            <div style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "20px" }}>
                Designed by Compunet Connections.
            </div>
        </div>
    );
}
export default Footer;