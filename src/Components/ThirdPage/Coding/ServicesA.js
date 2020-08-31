import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../Design/Animation.css";

const ServicesA = () => (
  <Container>
    <Row>
      <Col className="background" xs="12" sm="12" md="12" lg="12" xl="12">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
      </Col>
    </Row>
  </Container>
);

export default ServicesA;

