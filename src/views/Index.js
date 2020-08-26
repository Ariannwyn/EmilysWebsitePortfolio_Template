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

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";

// sections for this page/view;
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";

//gifs
import nasaImg from "../assets/img/NasaProject.gif";
import portfolioImg from "../assets/img/PortfolioProject.gif";
import devDeskImg from "../assets/img/DevDeskProject.gif";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
            <Examples
              id="Projects"
              live="https://emily-a-nasa.netlify.app/"
              image={nasaImg}
              code="https://github.com/Ariannwyn/nasa-photo-of-the-day/tree/emily-adams"
              text="I created a Space Photo Of The Day site that displays astronomy photos utilizing the NASA API."
              skills={"React \u2022 JavaScript \u2022 CSS \u2022 Reactstrap"}
            />
            <Examples
              live="https://emily-adams.netlify.app/index.html"
              image={portfolioImg}
              code="https://github.com/Ariannwyn/User-Interface-II/tree/emily-adamsday2"
              text="This was the first version of my portfolio. I created a landing page, about page, and a contact form."
              skills={"React \u2022 JavaScript \u2022 CSS \u2022 Reactstrap"}
            />
            <Examples
              live="https://devdeskqueuewebpt1.netlify.app/"
              image={devDeskImg}
              code="https://github.com/Build-Week-DevDeskQueue-1/Marketing-Page"
              text="I was part of a team making a ticketing system for Lambda School. My role was creating the Home and About pages."
              skills={"HTML \u2022 CSS \u2022 LESS"}
            />

            <Download id="About" />
          </div>
        </div>
      </>
    );
  }
}

export default Index;
