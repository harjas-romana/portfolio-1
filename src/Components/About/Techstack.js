import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiPython, DiHtml5, DiCss3, DiJsBadge, DiNodejs, DiReact, DiCplusplus, DiVite, DiHtml53dEffects, DiSass, DiRor } from "react-icons/di";
import { SiRedux, SiScikitLearn, SiPandas, SiNumpy } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml53dEffects />
        <p>C/C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJsBadge />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p>Node JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRor />
        <p>Scikit-learn</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <p>Pandas</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <p>Numpy</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* No specific icon for Machine Learning, using a generic icon */}
        <DiHtml5 />
        <p>Machine Learning</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* No specific icon for MongoDB, using a generic icon */}
        <DiHtml5 />
        <p>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* No specific icon for Firebase, using a generic icon */}
        <DiHtml5 />
        <p>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* No specific icon for Git, using a generic icon */}
        <DiHtml5 />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p>Redux</p>
      </Col>
    </Row>
  );
}

export default Techstack;