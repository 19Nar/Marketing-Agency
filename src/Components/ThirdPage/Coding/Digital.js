import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../Design/Digital.css";
import video from "../../../Images/mojovid.mp4";
import Video from "react-responsive-video";

const Digital = () => {
  return (
    <Container fluid={true} className="strategiesDiv">
      <Container fluid={false}>
        <>
          <Row>
            <h2 className="servicesPageSub">
              Digital Strategies To Help Your Business Grow
            </h2>
            <Col xs="12" sm="12" md="12" lg="6" xl="6">
              <Video webm={video} objectFit={`contain`} />
            </Col>
            <Col>
              <p className="descriptionServicesVid">
                Whether you need a new website, or just looking to increase
                traffic to the one you’ve already got, we’ve got a solution for
                you. We are new in the digital marketing and website design
                industry but we are very ambitious. We’ve already gained
                invaluable experience in how to properly market businesses from
                any industry online. Whether you’re running a resort, a small
                online shop, or a large corporation, we have the know-how and
                experience to be able to market your business online and make it
                grow. We analyze your past successes, what has been done and
                what hasn't been successful. We then create a custom-tailored
                digital marketing solution. Each marketing endeavor is a team
                effort which brings together technical knowledge, graphic
                design, and marketing techniques.
              </p>
            </Col>
          </Row>
        </>
      </Container>
    </Container>
  );
};

export default Digital;
