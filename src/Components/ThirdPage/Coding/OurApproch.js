import React from "react";
import { Col, Row, Container } from "reactstrap";

import gif from "../photos/gif.png";

import "../Design/Services.css";

const OurApproch = () => {
  return (
    <Container fluid={true} className="approachDiv">
      <Container fluid={false}>
        <Row>
          <Col className="approach" xs="12" sm="12" md="12" lg="12" xl="12">
            <h4 className="servicesPageSub">Our Approach</h4>
            <h6 className="servicesPageBold">
              We use dyadic relationship between a customer and a brand to
              create feeling of companionship.
            </h6>
            <p className="descriptionServices">
              Professional, committed, and experienced, the team executes
              efficient and responsive project management and remains flexible
              to changes in project scope.. Our content team specializes in both
              creative and technical services. From improving your site’s user
              experience to maintaining your blog to creating infographics that
              break through the noise, our content services help drive
              engagement and conversion.
            </p>
            <div className="gif">
              <img className="approachImg" src={gif} alt="Gif" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default OurApproch;
