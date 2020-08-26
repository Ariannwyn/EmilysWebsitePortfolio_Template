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
import { Link } from "react-router-dom";
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4,
    };
  }
  toggleTabs = (e, stateName, index) => {
    //e.preventDefault();
    this.setState({
      [stateName]: index,
    });
  };
  render() {
    return (
      <div className="section section-examples" data-background-color="black">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <div className="space-50" />
        <Container className="text-center">
          {/* Project 1! */}
          <Row>
            {/* Image Card */}
            <Col sm="6">
              {/* Add link to live page here */}
              <Link to={this.props.live}>
                <img
                  alt="..."
                  className="img-raised"
                  href={this.props.live}
                  // Add GIF here v
                  src={this.props.image}
                />
              </Link>
            </Col>
            {/* Summary Card */}
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 4,
                        })}
                        onClick={(e) => this.toggleTabs(e, "textTabs", 4)}
                        href="#emily"
                      >
                        Summary
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 6,
                        })}
                        onClick={(e) => this.toggleTabs(e, "textTabs", 6)}
                        href="#emily"
                      >
                        Tools Utilized
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.textTabs}
                  >
                    <TabPane tabId="link4">
                      <p>{this.props.text}</p>
                    </TabPane>
                    <TabPane tabId="link6">
                      <p>{this.props.skills}</p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
              <a
                className="btn-simple btn-round"
                color="primary"
                href={this.props.live}
                target="_blank"
                rel="noopener noreferrer"
                // Change location the button directs to
              >
                View Live Project
              </a>
              <a
                className="btn-simple btn-round"
                color="primary"
                href={this.props.code}
                target="_blank"
                rel="noopener noreferrer"
                // Change location the button directs to
              >
                View Code
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Examples;
