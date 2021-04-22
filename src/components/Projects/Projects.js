import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import hissnmuslim from "../../Assets/Projects/leaf.png";
import trainingtracker from "../../Assets/Projects/leaf.png";
import ieeesb from "../../Assets/Projects/leaf.png";
import jobhunter from "../../Assets/Projects/leaf.png";
import iwimhub from "../../Assets/Projects/leaf.png";
import kindnet from "../../Assets/Projects/leaf.png";
import ensiaswikihub from "../../Assets/Projects/leaf.png";
import kalah from "../../Assets/Projects/leaf.png";
import reactlofi from "../../Assets/Projects/leaf.png";
import awesomemuslims from "../../Assets/Projects/leaf.png";
import codinggame from "../../Assets/Projects/leaf.png";
import devproductivity from "../../Assets/Projects/leaf.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Coding <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ensiaswikihub}
              isBlog={false}
              title="ENSIAS WikiHub"
              description="Exchange Forum related to programming with a recommendation system."
              link="https://github.com/choubari/ENSIAS-WikiHub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kindnet}
              isBlog={false}
              title="Kind Net"
              description="2D Game which aims to raise awearness against cyberbullying."
              link="https://github.com/choubari/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iwimhub}
              isBlog={false}
              title="IWIM Hub"
              description="Mobile Application to manage IWIM Branch (Timetables, messaging, absence...)."
              link="https://github.com/choubari/IWIM-Hub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={awesomemuslims}
              isBlog={false}
              title="Awesome Muslims"
              description="A currated list of Awesome Muslim Resources to encourage and help developers produce more islamic apps."
              link="https://github.com/choubari/Awesome-Muslims"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactlofi}
              isBlog={false}
              title="Chill Choub"
              description="A Responsive Web-App to enjoy and chill Lofi Beats."
              link="https://github.com/choubari/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobhunter}
              isBlog={false}
              title="JobHunter"
              description="IT Profile Recruitment Platform."
              link="https://github.com/choubari/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ieeesb}
              isBlog={false}
              title="IEEE ENSIAS Management System"
              description="Web Application to manage work within the IEEE ENSIAS Student Branch."
              link="https://github.com/choubari/IEEE-ENSIAS-Management-System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trainingtracker}
              isBlog={false}
              title="Training Tracker"
              description="Mobile Application for sports training tracking."
              link="https://github.com/choubari/Training-Tracker"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hissnmuslim}
              isBlog={false}
              title="Hissn Al Muslim"
              description="Open Source Mobile App for Muslims (+35 stars and +15 forks on Github)."
              link="https://github.com/choubari/Muslim-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kalah}
              isBlog={false}
              title="Kalah Game"
              description="KALAH also called MANCALA is a game played on a board of two rows, each consisting of six round pits that have a large store at either end called kalah.
The object of the game is to capture more seeds than one's opponent."
              link="https://github.com/moadfakhri/KALAH-"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Favorite <strong className="purple">Instagram </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my posts</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={codinggame}
              link="https://www.instagram.com/p/CNS7_wmIcLj/"
              title="Coding: A Long Game"
              site=""
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={devproductivity}
              link="https://www.instagram.com/p/CNDSdHaIv0e/"
              title="Can developer productivity be measured?"
              site=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;