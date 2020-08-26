/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h2 className="title">About Emily</h2>
              <h4 className="description">
                I come from a background as a 3D artist working at video game
                development studios for over 4 years, and since then have found
                my passion as a programmer and web developer. My years as an
                artist have given me both strong design skills as well as
                experience in software development which has been invaluable to
                my web development journey.
              </h4>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round"
                color="info"
                href="https://www.linkedin.com/in/emilyadamsprofile/"
                role="button"
                size="lg"
              >
                Let's Work Together!
              </Button>
            </Col>
          </Row>
          <Row className="row-grid align-items-center my-md">
            <Col lg="6">
              <h3 className="text-info font-weight-light mb-2">
                Thanks for looking!
              </h3>
              <h4 className="mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon btn-round"
                color="twitter"
                id="twitter"
                size="lg"
                href="https://twitter.com/Ariannwyn3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="twitter">
                Tweet!
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-round"
                color="facebook"
                id="facebook"
                size="lg"
                href="https://www.linkedin.com/in/emilyadamsprofile/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <UncontrolledTooltip delay={0} target="facebook">
                Share!
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-round"
                color="github"
                href="https://github.com/creativetimofficial"
                id="tooltip877922017"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip877922017">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Download;
