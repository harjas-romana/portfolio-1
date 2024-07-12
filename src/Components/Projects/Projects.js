import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import tictac from "../../Assets/Projects/cba.png";
import Smatbot from "../../Assets/Projects/admin.png";
import todo from "../../Assets/Projects/diabetes.png";
import Booking from "../../Assets/Projects/movie.png";
function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={tictac}
							isBlog={false}
							title="Complaint Management System"
							description="A platform made to simplify complaint management process & increase productivity."
							techstack="Flutter | Firebase | REST"
							link="https://cba-vitb.netlify.app/"
							git="https://github.com/harjas-romana/vitbhopal_cba"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Smatbot}
							isBlog={false}
							title="Admin Page for Complaint Management System"
							description="Admin page for platform made to simplify complaint management process & increase productivity."
							techstack="Flutter | Firebase"
							link="https://admin-cba-vitb.netlify.app"
							git="https://github.com/harjas-romana/vitbhopal_cba"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={todo}
							isBlog={false}
							title="Diabetes Prediction Model"
							description="An application made to predict whether you are diabetic or not."
							techstack="React | scikit-learn | Flask"
							link="https://diabetes-prediction-model.netlify.app"
							git="https://github.com/harjas-romana/diabetes-prediction-project"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Booking}
							isBlog={false}
							title="Movie Recommendation System"
							description="It shows you the recommended movies of any selected movie to help you choose a more relavent option without worry."
							techstack="React | Streamlit | Machine Learning"
							link="https://fdk-vitb.streamlit.app"
							git="https://github.com/harjas-romana/Movie-Recommender"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
