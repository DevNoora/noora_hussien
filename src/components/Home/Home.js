import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/logo2.svg";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 0 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Noora Hussien</strong>
              </h1>

              <div style={{ padding: 0, textAlign: "left" }}>
                <Type />
              </div>
              <p className="home-about-body">
                I am Noura Hussein, I work as a full stack , Mobile application
                full stack and a project manager on them. I am experienced with
                creating effective user interface with clean code.make the
                complete SDLC of the project And developing the project plan,
                studying the project and laying down its structure.
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b>
                </i>
                <br />
                We have a professional team that includes the work of Guideline
                and make a targeted strategic plan with the work of a complete
                study for the user experience to create a professional website
                or application, solve problems and find solutions as much as
                possible that are targeted and help people.
                <br />
                <br />
                Whenever possible, we are apply passion for developing products
                with{" "}
                <b className="purple">
                  {" "}
                  php (Laravel) and Python (Django)x
                </b>{" "}
                and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>
              </p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "550px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
