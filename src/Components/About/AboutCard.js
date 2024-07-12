import React from "react";
import Card from "react-bootstrap/Card";
import MovieIcon from "@mui/icons-material/Movie";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Harjas Partap Singh Romana</span>
            from <span className="purple">Faridkot, Punjab.</span>
            <br />I an currently a third year Computer Science student(B.Tech) at Vellore Institute of Technology
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <MovieIcon /> Listening to Music
            </li>
            <li className="about-activity">
              <AutoStoriesIcon /> Reading Scientific Books
            </li>
            <li className="about-activity">
              <ScreenSearchDesktopIcon /> Researching about latest tech
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <br />
          <footer className="blockquote-footer"> Harjas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
