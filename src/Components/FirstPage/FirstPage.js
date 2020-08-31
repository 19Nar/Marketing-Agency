import React, { useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Aos from "aos";
import "aos/dist/aos.css";
import "./FirstPage.css";

import marketing from "../ThirdPage/photos/marketing.jpg";
import webdev from "../../Images/webdev.jpg";
import strategy from "../ThirdPage/photos/strategy.jpg";

import intec from "../../Images/inteclogo.jpg";
import lotus from "../../Images/lotus.png";
import een from "../../Images/eenlogo.png";

const FirstPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Jumbotron className="jumbo">
        <Container className="header">
          <h1 data-aos="zoom-in" className="headerTitle">
            MARKETING
          </h1>
          <h1 data-aos="zoom-in" className="headerTitle">
            AGENCY
          </h1>
        </Container>

        <Container className="HPLinks" fluid={true}>
          <a className="link" href="url">
            MARKETING
          </a>
          <a className="link" href="url">
            WEB DEVELOPMENT
          </a>
          <a className="link" href="url">
            STRATEGY
          </a>
        </Container>
      </Jumbotron>

      <Container fluid={true}>
        <Row className="aboutSection">
          <Col lg={12} className="aboutSection">
            <Container data-aos="fade-left" className="about">
              <h1 className="aboutUsTitle">ABOUT US</h1>
              <p className="aboutUsText">
                MOJO is a marketing agency based in Brussels, Belgium and was
                founded by three women.
                <br />
                We focus on all things digital, such as marketing, web
                development, design and more. Give your business the digital
                boost it needs!
                <br />
                Read all about us <a href="/about">here!</a>
              </p>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="servicesSection">
        <Row>
          <Col lg={12}>
            <h1 data-aos="fade-up" className="servicesTitle">
              OUR SERVICES
            </h1>
          </Col>
        </Row>
        <Row className="services">
          <Col className="serviceImgWrap" lg={4}>
            <Image
              data-aos="fade-up"
              className="servicesImg"
              src={marketing}
              roundedCircle
            />
            <h2 data-aos="fade-up" className="hpserv">
              Marketing
            </h2>
          </Col>
          <Col className="serviceImgWrap" lg={4}>
            <Image
              data-aos="fade-up"
              className="servicesImg"
              src={webdev}
              roundedCircle
            />
            <h2 data-aos="fade-up" className="hpserv">
              Development & Design
            </h2>
          </Col>
          <Col className="serviceImgWrap" lg={4}>
            <Image
              data-aos="fade-up"
              className="servicesImg"
              src={strategy}
              roundedCircle
            />
            <h2 data-aos="fade-up" className="hpserv">
              Digital Strategy
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className="serviceImgWrap" lg={12}>
            <Button data-aos="fade-up" className="servBtn" href="/services">
              read more about our services
            </Button>
          </Col>
        </Row>
      </Container>

      <Container fluid={true}>
        <Row className="testimonialSection">
          <Col lg={12}>
            <h1 className="testimonialTitle">TESTIMONIALS</h1>
            <Container className="center">
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  xl={4}
                  className="servicesCards col d-flex justify-content-center"
                >
                  <Card
                    data-aos="flip-left"
                    style={{ width: "18rem" }}
                    className="cardOverlay"
                  >
                    <Card.Img variant="top" src={intec} />
                    <Card.Body>
                      <Card.Text>
                        As the founders of MOJO started their web development
                        careers at INTEC Brussel, we knew already from the start
                        we made the right choise. They developed a new website,
                        together with a digital marketing campaign to reach more
                        potential students.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  xl={4}
                  className="servicesCards col d-flex justify-content-center"
                >
                  <Card
                    data-aos="flip-left"
                    style={{ width: "18rem" }}
                    className="cardOverlay"
                  >
                    <Card.Img variant="top" src={lotus} />
                    <Card.Body>
                      <Card.Text>
                        We wanted to come up with a digital approach to reach a
                        new target audience and focus on a youngher audience.
                        MOJO helped us to come up with different creative ideas
                        and a marketing campaign on social media. The results of
                        the campaign were admireable.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  xl={4}
                  className="servicesCards col d-flex justify-content-center"
                >
                  <Card
                    data-aos="flip-left"
                    style={{ width: "18rem" }}
                    className="cardOverlay"
                  >
                    <Card.Img variant="top" src={een} />
                    <Card.Body>
                      <Card.Text>
                        We contacted MOJO to make a website for one of our new
                        TV-shows which we wanted to promote online as well. The
                        professional and effective approach really helped us to
                        work towards a shared goal.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FirstPage;