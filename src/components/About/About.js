"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
<<<<<<< C:\Users\Asus\Desktop\Portfolio\src\components\About\About.js
            <img src={laptopImg} alt="about" className="img-fluid" />
=======
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              loading="lazy"
              decoding="async"
            />
>>>>>>> c:\Users\Asus\.windsurf\worktrees\Portfolio\Portfolio-1103aada\src\components\About\About.js
          </Col>
        </Row>

        <h1 className="project-heading">
          Core <strong className="purple">Skills</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          Design & <strong className="purple">Tools</strong>
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
