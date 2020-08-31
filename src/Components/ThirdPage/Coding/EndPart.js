import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../Design/Services.css";

const EndPart = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12" xl="12">
            <h1 className="slot">
              Looking to increase the return on your marketing spend?
              <br />
              Contact MOJO!
            </h1>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className="endPart"></Container>
    </>
  );
};

export default EndPart;
