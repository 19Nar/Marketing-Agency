import React from "react";

import { Container, Row, Col } from "reactstrap";
import facebook from "../Footer/icons/facebook.jpg";
import insta from "../Footer/icons/insta.jpg";
import call from "../Footer/icons/call.jpg";

import "./Footer.css";
import "./Button.css";

const Footer = () => {
  return (
    <div className="foot">
      <span className="footer1">
        <Container>
          <Row>
            <Col className="social" xs="12" sm="12" md="3" lg="3" xl="3">
              <a href="https://www.facebook.com/MOJO-107058004458286">
                <img src={facebook} alt="" />
              </a>
              <a href="https://www.facebook.com/MOJO-107058004458286">
                <img src={insta} alt="" />
              </a>
              <a href="/contacts">
                <img src={call} alt="" />
              </a>
            </Col>

            <Col className="address" xs="12" sm="12" md="4" lg="4" xl="4">
              <p className="footerP">Bever street 5, 1000, Brussels, Belgium</p>
              <p className="footerP">+32 476 64 43 289 || BE0845.938.8912</p>
            </Col>

            <Col className="created" xs="12" sm="12" md="2" lg="2" xl="2">
              <span className="footer3">
                <p className="footerP">info@mojo.com</p>
              </span>
            </Col>

            <Col className="contact" xs="12" sm="12" md="3" lg="3" xl="3">
              <span className="footer2">
                <div className="wrap">
                  <a href="/contacts">
                    <button className="button">LET'S CONNECT</button>
                  </a>
                </div>
              </span>
            </Col>
          </Row>
        </Container>
      </span>
    </div>
  );
};

export default Footer;
