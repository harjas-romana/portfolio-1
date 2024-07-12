import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiCodesandbox,
	SiVisualstudiocode,
	SiCodepen,
	SiPostman,
	SiHeroku,
	SiGithub,
	SiVercel,
	SiAzureartifacts,
	SiAzuredevops,
	SiIntellijidea,
	SiAmazonaws
} from "react-icons/si";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
				<p>VS Code</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiIntellijidea />
				<p>Intellij</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGithub />
				<p>Github</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAmazonaws />
				<p>AWS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAzuredevops />
				<p>Azure</p>
			</Col>
		</Row>
	);
}

export default Toolstack;
