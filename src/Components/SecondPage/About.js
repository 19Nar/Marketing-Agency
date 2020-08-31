import React, { Component } from "react";
import { AiFillGithub } from "react-icons/ai";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aos from "aos";
import "aos/dist/aos.css";

import "./About.css";

import img1 from "../../Images/me1.jpg";
import img2 from "../../Images/profielfoto.jpg";
import img3 from "../../Images/MicrosoftTeams-image.jpeg";

export default class AboutUs extends Component {
  state = {
    people: [
      {
        img: img1,
        title: "NARINE VANBEGINNE",
        info:
          "Professional with more than 10 years of experience and a proven knowledge of teaching, translation and web development.",
        icon: <AiFillGithub />,
        gitRepo: "https://github.com/19Nar",
      },
      {
        img: img2,
        title: "STIEN FRANSSENS",
        info:
          "An enthusiastic creative person with an interest in marketing, photography and web development.",
        icon: <AiFillGithub />,
        gitRepo: "https://github.com/stienf",
      },
      {
        img: img3,
        title: "GISELLE MONTERO GONZALEZ",
        info:
          "Computer Engineer graduated from Universidad de las Américas, Puebla., México with experience in SEO and Google Tool Management",
        icon: <AiFillGithub />,
        gitRepo: "https://github.com/gisnetzEU",
      },
    ],
  };

  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
  }

  render() {
    return (
      <>
        <Jumbotron className="aboutJumbotron" fluid={true}>
          <h1 data-aos="zoom-in" className="aboutHeaderTitle">
            ABOUT US
          </h1>
        </Jumbotron>
        <section className="aboutUs">
          <div className="description">
            <p>
              {" "}
              Located in Brussels, MOJO is a digital marketing and communication
              agency producing concrete and measurable results. <br /> Our
              agency supports you in the development of your digital ambitions.
              <br />
              Thanks to our approach based on innovation and marketing
              creativity, we assure you a customer-oriented approach with the
              satisfaction of the actions carried out as a keyword.{" "}
            </p>
          </div>

          <Container data-aos="fade-up" fluid={true} className="cardContainer">
            <h2 data-aos="fade-up" className="meetTeam">
              MEET OUR TEAM
            </h2>
            <div data-aos="fade-up" className="aboutUs-center">
              {this.state.people.map((item) => {
                return (
                  <div data-aos="fade-up" className="about-card">
                    <div className="about-cards-div">
                      <article key={`item-${item.title}`} className="service">
                        <span>
                          <img
                            className="teamImg"
                            src={item.img}
                            alt="our team"
                          />
                        </span>

                        <h4 className="names">{item.title}</h4>
                        <p className="info">{item.info}</p>
                        <br></br>
                        <p>
                          <a
                            href={item.gitRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.icon}
                          </a>
                        </p>
                      </article>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <Container data-aos="fade-up" fluid={true} className="jobsHeader">
          <h2 className="joinTeam">WOULD YOU LIKE TO JOIN OUR TEAM?</h2>
        </Container>
        <Container fluid={false} className="jobs">
          <h2 className="lookingfor">WE'RE CURRENTLY LOOKING FOR:</h2>
          <Row data-aos="fade-left" className="socialExpertRow">
            <Col className="socialPhoto"></Col>
            <Col className="socialText">
              <h3>SOCIAL MEDIA WIZARD</h3>
              <p>
                Are you a true digital native? Social media holds no secrets for
                you? Do you have experience in social advertising and Google
                Analytics? Then you might be the one we're looking for. Send
                your resume and portfolio to jobs@mojo.be, and we will talk to
                you soon!
              </p>
            </Col>
          </Row>

          <Row data-aos="fade-right" className="UIRow">
            <Col className="UIText">
              <h3>UI/UX DESIGNER</h3>
              <p>
                You will be resposible for designing user-friendly web
                applications for our clients. With your experience in
                development, you know how to design the most beautiful,
                responsive and easy-to-use interfaces.
              </p>
            </Col>
            <Col className="UIPhoto"></Col>
          </Row>

          <Row data-aos="fade-left" className="SEORow">
            <Col className="SEOPhoto"></Col>
            <Col className="SEOText">
              <h3>SEO COPYWRITER</h3>
              <p>
                We're looking for a creative copywriter with SEO knowledge. You
                will be responsible for writing both online and printed content
                for our clients' projects. You provide us with readable and
                relevant content where you took SEO into account. You analyse
                and optimize your content on a regular basis.
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

