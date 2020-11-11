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
import bookstoreImg from "../assets/img/bookstoreProject.gif";
import buildweekImg from "../assets/img/buildweekProject.gif";

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
              live="https://devdeskqueuewebpt1.netlify.app/"
              image={buildweekImg}
              code="https://github.com/Build-Week-DevDeskQueue-1/Marketing-Page"
              text="I was part of a team creating a neighborhood social app. This would allow people within a neighborhood to post items for sale, or missing items, etc. My role was implementing CRUD opperations to display and edit the posts, as well as ensuring the token authentication and state management on the front end."
              skills={"React \u2022 JavaScript \u2022 Context \u2022 Cypress \u2022 Styled Components \u2022 Reactstrap"}
            />
          <Examples
              live="https://the-bookstore.netlify.app/"
              image={bookstoreImg}
              code="https://github.com/book-store-sales/react-shopping-cart"
              text="I was part of a team creating a bookstore site that implements React-Redux as a state management system. This application fetches data from an API to display the books listed, and allows the user to add and remove items from a shopping cart" //, modify the cart, checkout with a form, and recieve a success message on submit with their order.
              skills={"React \u2022 JavaScript \u2022 CSS \u2022 Redux \u2022 Sass"}
            />
            <Examples
              id="Projects"
              live="https://emily-a-nasa.netlify.app/"
              image={nasaImg}
              code="https://github.com/Ariannwyn/nasa-photo-of-the-day/tree/emily-adams"
              text="I created a Space Photo Of The Day site that displays astronomy photos utilizing the NASA API."
              skills={"React \u2022 JavaScript \u2022 CSS \u2022 Reactstrap"}
            />
            <Download id="About" />
          </div>
        </div>
      </>
    );
  }
}

export default Index;
