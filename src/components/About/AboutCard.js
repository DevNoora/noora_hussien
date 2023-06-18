import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Noora Hussien </span>
            from <span className="purple"> Baghdad, Iraq.</span>
            <br /> Software Developer |Full stack developer |Flutter developer
            |Project manager |vm ware |Linux |The 1st on my branch
            <br />
            We have a professional team that includes the work of Guidelines and
            make a targeted strategic plan with the work of a complete study for
            the user experience to create a professional website or
            applications, solving problems and find solutions as much as
            possible that are targeted and help people.
            <br />
            <br />
            Apart from coding, some other activities that we love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Create visual identity
            </li>
            <li className="about-activity">
              <ImPointRight /> Study the user experience
            </li>
            <li className="about-activity">
              <ImPointRight /> Integrated SDLC
            </li>
          </ul>

          <p style={{ color: "#8b74f9" }}>
            "I will do my best to bring some thing make the change and helpping
            people"{" "}
          </p>
          <footer className="blockquote-footer">Noora</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
