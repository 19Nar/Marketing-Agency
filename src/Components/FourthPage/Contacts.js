import React from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import Iframe from "react-iframe";

import "./Contacts.css";

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Container>
        <Row>
            <Col className="ourmap" xs="12" sm="12" md="12" lg="6" xl="6">
              <Iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80598.89310792812!2d4.305349901136347!3d50.85495409072315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3a4ed73c76867%3A0xc18b3a66787302a7!2sBrussels!5e0!3m2!1sen!2sbe!4v1598210590356!5m2!1sen!2sbe"
              ></Iframe>
            </Col>
          <Col
            className="mojocontact"
            xs="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
            offset="m6"
          >
            <Card
              className="red-light darken-1 contactCard "
              textClassName="gray-text"
            >
              <div className="contactHeader">Contact Us</div>

              <form
                onSubmit={this.submitForm}
                action="https://formspree.io/xgenbngq"
                method="POST"
              >
                <Row className="email">
                  <FormGroup>
                    <Label for="email">EMAIL</Label>
                    <Input
                      type="email"
                      name="email"
                      id="emailForm"
                      placeholder="your e-mail"
                      validate
                    />
                  </FormGroup>
                </Row>

                <Row className="name">
                  <FormGroup>
                    <Label for="name">NAME</Label>
                    <Input
                      type="text"
                      name="name"
                      id="nameForm"
                      placeholder="your full name"
                      validate
                    />
                  </FormGroup>{" "}
                </Row>
                <Row className="message">
                  <FormGroup>
                    <Label for="text">YOUR MESSAGE</Label>
                    <Input
                      type="textarea"
                      name="text"
                      id="messageForm"
                      validate
                    />
                  </FormGroup>
                </Row>

                {status === "SUCCESS" ? (
                  <p>
                    <br></br>Your email has been sent.!
                  </p>
                ) : (
                  <Button className="btnContact">SUBMIT</Button>
                )}
                {status === "ERROR" && (
                  <p>
                    <br></br>Your email was not sent. Please try again.
                  </p>
                )}
              </form>
            </Card>
          </Col>
          <Row>
            <Col
              className="ourmap"
              xs="12"
              sm="12"
              md="6"
              lg="12"
              xl="12"
            ></Col>
          </Row>
        </Row>
      </Container>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
