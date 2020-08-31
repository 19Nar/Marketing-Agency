import React from "react";

import OurApproch from "./OurApproch";
import OurServices from "./OurServices";
import service from "../photos/service.png";
import brand from "../photos/brand.jpg";

import { Container, Row, Col } from "reactstrap";

import "../Design/Services.css";

const Services = () => (
  <>
    <Container fluid={false} className="servicesBDiv">
      <Row>
        <Col className="service" xs="12" sm="12" md="12" lg="6" xl="6">
          <img className="servicesHeaderImg" src={service} alt="service" />
          <h4 className="servicesPageSub">A Brand-first Marketing Agency</h4>
          <h6 className="servicesPageBold">
            We help businesses to drive demand, to build brands and to change
            the way people live.
          </h6>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="12" md="12" lg="6" xl="6">
          <p className="descriptionServices">
            All our solutions begin with brand research as we believe that an
            effective brand can give you a significant edge in today’s highly
            competitive market.
          </p>
          <p className="descriptionServices">
            {" "}
            Our team is exploring the new, always innovating, with a focus on
            creative storytelling and start by developing a foundation built on
            strong brand pillars.
          </p>
          <p className="descriptionServices">
            {" "}
            Our agency communicates with new found audience and develops a
            relationship that converts them to consumers and eventually brand
            loyalists.
          </p>
          <p className="descriptionServices">
            {" "}
            We help you to reach your prospects while maintaining a robust
            relationship with your existing clients.
          </p>
        </Col>
        <Col className="brand" xs="12" sm="12" md="12" lg="6" xl="6">
          <img src={brand} alt="Gif" />
        </Col>
      </Row>
    </Container>
    <OurApproch />
    <OurServices />
  </>
);

export default Services;

